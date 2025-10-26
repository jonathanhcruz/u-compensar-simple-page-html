const fs = require('fs');
const path = require('path');
const { promises: fsp } = fs;

async function rmrf(p) {
  await fsp.rm(p, { recursive: true, force: true }).catch(() => {});
}

async function copyRecursive(src, dest) {
  await fsp.mkdir(dest, { recursive: true });
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyRecursive(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function fileExists(p) {
  try {
    await fsp.access(p);
    return true;
  } catch {
    return false;
  }
}

async function build() {
  const root = process.cwd();
  const buildDir = path.join(root, 'build');

  console.log('Cleaning build directory...');
  await rmrf(buildDir);

  // Ensure directories
  await fsp.mkdir(path.join(buildDir, 'css'), { recursive: true });
  await fsp.mkdir(path.join(buildDir, 'js'), { recursive: true });

  // Compile SCSS -> CSS (compressed)
  try {
    console.log('Compiling SCSS...');
    const sass = require('sass');
    const scssEntry = path.join('src', 'scss', 'main.scss');
    if (!(await fileExists(scssEntry))) {
      console.warn('SCSS entry not found at', scssEntry, '- skipping CSS build');
    } else {
      const result = sass.renderSync({ file: scssEntry, outputStyle: 'compressed' });
      await fsp.writeFile(path.join(buildDir, 'css', 'main.css'), result.css);
    }
  } catch (err) {
    console.error('Error compiling SCSS:', err);
    process.exitCode = 2;
    return;
  }

  // Bundle + minify JS using esbuild
  try {
    console.log('Bundling JS with esbuild...');
    const esbuild = require('esbuild');
    const jsEntry = path.join('src', 'js', 'main.js');
    if (!(await fileExists(jsEntry))) {
      console.warn('JS entry not found at', jsEntry, '- skipping JS build');
    } else {
      await esbuild.build({
        entryPoints: [jsEntry],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: path.join(buildDir, 'js', 'main.js'),
        platform: 'browser',
        target: ['es2017']
      });
    }
  } catch (err) {
    console.error('Error building JS with esbuild:', err);
    process.exitCode = 3;
    return;
  }

  // Copy HTML files from src root
  try {
    console.log('Copying HTML files...');
    const entries = await fsp.readdir(path.join('src'));
    for (const name of entries) {
      const srcPath = path.join('src', name);
      const stat = await fsp.stat(srcPath);
      if (stat.isFile() && name.endsWith('.html')) {
        await fsp.copyFile(srcPath, path.join(buildDir, name));
      }
    }
  } catch (err) {
    console.error('Error copying HTML files:', err);
    process.exitCode = 4;
    return;
  }

  // Copy images directory if exists
  const imgSrc = path.join('src', 'img');
  if (await fileExists(imgSrc)) {
    console.log('Copying images...');
    try {
      await copyRecursive(imgSrc, path.join(buildDir, 'img'));
    } catch (err) {
      console.error('Error copying images:', err);
      process.exitCode = 5;
      return;
    }
  }

  console.log('Build finished successfully. Output in:', buildDir);
}

build().catch(err => {
  console.error('Unexpected build error:', err);
  process.exit(10);
});

