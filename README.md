# U Compensar Simple Page HTML

A modern, clean HTML landing page project with SCSS architecture and automatic development server with live reload capabilities.

## Features

- 🎨 **Clean Modern Design** - Minimalist layout with professional styling
- 📱 **Responsive Grid Layout** - Two-column design that adapts to different screen sizes
- 🔧 **Modular SCSS Architecture** - Organized with BEM methodology and component-based structure
- 🔄 **Live Development Server** - Automatic page reload and CSS compilation during development
- ⚡ **Sass Compilation** - Automatic SCSS to CSS compilation with source maps
- 🖼️ **Image Assets** - Includes logo and illustration graphics
- 🎯 **Component-Based Styling** - Separate SCSS files for menu and content sections

## Project Structure

```
src/
├── index.html              # Main HTML page with menu and content sections
├── css/                    # Compiled CSS files (auto-generated, git-ignored)
│   ├── main.css           # Main compiled stylesheet
│   ├── main.css.map       # Source map for debugging
│   └── page/              # Individual page component CSS
│       ├── content.css    # Content section styles
│       ├── content.css.map
│       ├── menu.css       # Navigation menu styles  
│       └── menu.css.map
├── scss/                   # SCSS source files
│   ├── main.scss          # Main SCSS entry point with imports
│   ├── base/              # Base styles and configuration
│   │   ├── _base.scss     # Base HTML element styles
│   │   ├── _mixins.scss   # Reusable SCSS mixins
│   │   └── _variables.scss # Design tokens (colors, spacing, typography)
│   └── page/              # Page-specific component styles
│       ├── content.scss   # Main content area and info section
│       └── menu.scss      # Navigation menu and logo
├── img/                   # Image assets
│   ├── illustration.png   # Main content illustration
│   └── logo.png          # U Compensar logo
└── js/
    └── main.js            # JavaScript functionality
```

## Design Overview

The page features a clean, modern layout with:
- **Header Navigation** - Logo and horizontal menu with 5 navigation items
- **Main Content** - Two-column grid layout with text content and illustration
- **Typography** - Professional fonts with clear hierarchy (45px titles, 24px descriptions)
- **Color Scheme** - Blue primary colors (#2c5282, #3182ce) with green CTA button (#057509)
- **Responsive Design** - Grid-based layout that adapts to different screen sizes

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download** the project to your local machine

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

This will:
- Start watching SCSS files for changes and automatically compile them to CSS
- Launch a live server on `http://localhost:3000` 
- Automatically reload the page when HTML, CSS, or JS files change
- Open the page in your default browser

### Available Scripts

- **`npm run dev`** - Start development server with live reload and SCSS watching (recommended for development)
- **`npm run watch-css`** - Watch SCSS files and compile to CSS only
- **`npm run build-css`** - Build CSS for production (compressed, no source maps)
- **`npm run serve`** - Start live server only (without SCSS compilation)

## Development

### Technology Stack
- **Sass/SCSS** - CSS preprocessing with variables, mixins, and modular architecture
- **live-server** - Development server with automatic browser reload
- **concurrently** - Run multiple npm scripts simultaneously
- **CSS Grid & Flexbox** - Modern layout techniques for responsive design

### SCSS Architecture

The project follows a modular SCSS architecture:

#### Base Layer (`src/scss/base/`)
- **`_variables.scss`** - Design system tokens:
  - Colors: Primary (#2c5282), Secondary (#3182ce), Button (#057509)
  - Breakpoints: Mobile (480px), Tablet (768px), Desktop (1024px+)
  - Spacing: xs(0.5rem) to xxl(4rem)
  - Typography: Font families, sizes, and weights

- **`_mixins.scss`** - Reusable SCSS mixins for common patterns
- **`_base.scss`** - Global styles, resets, and base HTML element styling

#### Page Layer (`src/scss/page/`)
- **`menu.scss`** - Navigation header with logo and menu items
  - Grid layout (200px logo column + flexible nav)
  - Responsive menu design
  - Hover effects and transitions

- **`content.scss`** - Main content area styling  
  - Two-column grid layout (1fr 1fr)
  - Typography hierarchy and spacing
  - Button styling and image container

### Customization Guide

1. **Colors & Branding**: Edit `src/scss/base/_variables.scss`
   - Change `$primary-color`, `$secondary-color` for brand colors
   - Update `$button-bg` for call-to-action styling
   
2. **Layout & Spacing**: Modify variables in `_variables.scss`
   - Adjust `$spacing-*` values for consistent spacing
   - Update breakpoints for responsive behavior
   
3. **Components**: Edit individual component files
   - `src/scss/page/menu.scss` for navigation styling
   - `src/scss/page/content.scss` for main content layout
   
4. **Content**: Update `src/index.html`
   - Replace logo and illustration in `src/img/`
   - Modify text content and menu items
   
5. **Interactions**: Enhance `src/js/main.js` for additional functionality

### File Organization Benefits
- **Maintainable**: Each component has its own SCSS file
- **Scalable**: Easy to add new pages/components
- **Readable**: Clear separation of concerns
- **Efficient**: Automatic compilation and source maps for debugging

## Project Highlights

### Current Implementation
- ✅ **Clean Landing Page** - Professional layout with logo, navigation, and hero content
- ✅ **Modular SCSS Architecture** - Well-organized, maintainable stylesheet structure  
- ✅ **Live Development Workflow** - Automatic compilation and browser refresh
- ✅ **Responsive Grid System** - CSS Grid for main layout, Flexbox for components
- ✅ **Professional Styling** - Consistent spacing, typography, and color scheme
- ✅ **Asset Management** - Organized image assets with proper integration

### Git Configuration
The `.gitignore` is configured to exclude:
- `node_modules/` - Dependencies  
- `src/css/*` - Compiled CSS files (auto-generated)
- System files (`.DS_Store`, logs, etc.)
- IDE settings (`.vscode/`)

This ensures only source files are tracked, keeping the repository clean.

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Modern browsers with CSS Grid and Flexbox support

## Next Steps & Enhancements

Consider adding:
- 📱 Mobile-first responsive breakpoints
- 🎭 CSS animations and micro-interactions
- 🔍 SEO meta tags and structured data
- ♿ Accessibility improvements (ARIA labels, focus states)
- 🖼️ Optimized image formats (WebP, responsive images)
- 📦 Build process for production deployment

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for U Compensar** - A modern, maintainable approach to web development using SCSS and live development tools.
