# Personal Portfolio Website

A clean and modern personal portfolio website built with Node.js and Express.

## Features

- Responsive design that works on all devices
- Clean and modern UI
- Multiple pages: Home, About, Projects, Contact
- Mobile-friendly navigation
- Contact form with client-side validation
- Smooth animations and transitions

## Project Structure

```
Website/
├── server.js           # Express server configuration
├── package.json        # Project dependencies
├── public/             # Static files
│   ├── index.html     # Home page
│   ├── about.html     # About page
│   ├── projects.html  # Projects showcase
│   ├── contact.html   # Contact page
│   ├── 404.html       # 404 error page
│   ├── css/
│   │   └── style.css  # Styles
│   ├── js/
│   │   └── main.js    # Client-side JavaScript
│   └── images/        # Image assets
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd Website
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the server:
```bash
npm start
```

For development with auto-restart on file changes:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## Customization

### Updating Personal Information

1. **Name and Branding**: Update "Your Name" in all HTML files
2. **Content**: Edit the text in each HTML page to reflect your information
3. **Projects**: Add your projects in `projects.html`
4. **Contact Info**: Update email, phone, and location in `contact.html`
5. **Social Links**: Replace "#" with your actual social media URLs

### Styling

- Modify colors and theme in `public/css/style.css` (see `:root` section for color variables)
- Adjust layout and spacing as needed

### Adding Images

Place your images in `public/images/` and reference them in your HTML files.

## Pages

- **Home** (`/`): Landing page with hero section and feature cards
- **About** (`/about`): Information about you and your skills
- **Projects** (`/projects`): Showcase of your work
- **Contact** (`/contact`): Contact information and message form
- **404** (`*`): Custom error page for invalid routes

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+)

## License

MIT License - feel free to use this template for your personal website.
