# Aurelia Heights School Template

A modern, responsive school website template built with HTML5, CSS3, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Clean and professional appearance with gradient backgrounds
- **Multiple Pages**:
  - Home page with hero section and features
  - Gallery with filtering functionality
  - News section
  - Admissions information
  - Contact form
- **Interactive Components**: Smooth animations and transitions
- **Accessibility**: Semantic HTML and WCAG compliance considerations
- **Dark Mode Support**: Built-in dark mode preferences

## File Structure

```
school-template/
├── index.html              # Home page
├── gallery.html            # Image gallery with filters
├── news.html               # News/blog section
├── admissions.html         # Admissions information
├── contact.html            # Contact form
├── css/
│   ├── base.css           # Base styles and typography
│   ├── components.css     # Component-specific styles
│   ├── responsive.css     # Media queries
│   └── variables.css      # CSS variables and theming
├── js/
│   ├── navigation.js      # Navigation functionality
│   ├── gallery.js         # Gallery lightbox
│   └── gallery-filter.js  # Gallery filtering
└── assets/
    └── images/            # Image files
```

## Usage

1. Extract the template files
2. Place all files in your web server directory
3. Open `index.html` in your browser
4. Customize the content, colors, and images to match your school's branding

## Customization

### Colors
Edit `css/variables.css` to change the color scheme:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f39c12;
}
```

### Content
Edit HTML files directly to update text, images, and structure.

### Fonts
Modify the `font-family` property in `css/base.css` to use different fonts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This template is provided as-is for educational and commercial use.

## Support

For questions or issues, please contact support@aureliaheights.edu
