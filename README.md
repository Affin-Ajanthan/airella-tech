# Airella Tech - Company Website

A modern, responsive static website for Airella Tech built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional UI with Tailwind CSS
- **Responsive**: Mobile-friendly design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Dark Mode Ready**: Supports light and dark theme
- **Sections Included**:
  - Header with Navigation
  - Hero Section
  - Services Showcase
  - About Company
  - Contact Form
  - Footer

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      - Navigation header with mobile menu
│   ├── Hero.jsx        - Main hero section
│   ├── Services.jsx    - Services showcase
│   ├── About.jsx       - About company section
│   ├── Contact.jsx     - Contact form with info
│   └── Footer.jsx      - Footer section
├── App.jsx             - Main app component
├── App.css             - Custom styles
├── main.jsx            - Entry point
└── index.css           - Global styles with Tailwind
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Update Company Information

Edit the contact details and company info in:
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer links and info
- `src/components/About.jsx` - Company mission and stats
- `src/components/Header.jsx` - Logo and branding

### Colors

Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: "#1e40af",      // Change primary color
      secondary: "#0f172a",    // Change secondary color
    }
  }
}
```

### Forms

The contact form is pre-configured to show a success message. To add backend functionality:
1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Add your API endpoint for form submissions

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Airella Tech

## Support

For support or questions, contact: hr@airella.org
