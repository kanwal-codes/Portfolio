# Portfolio Website

A modern, responsive portfolio website designed for computer science students and developers to showcase their projects and skills to recruiters.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **Project Showcase**: Highlight your best projects with detailed descriptions
- **Skills Section**: Display your technical skills in an organized manner
- **Contact Form**: Working contact form with validation
- **Resume Download**: Easy access to your resume for recruiters
- **SEO Optimized**: Built with semantic HTML for better search engine visibility

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features and animations
- **Font Awesome**: Icons for social links and UI elements
- **Google Fonts**: Inter font family for modern typography

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download** this repository to your local machine
2. **Open** the project folder in your preferred code editor
3. **Customize** the content to match your information:
   - Replace placeholder text with your actual information
   - Update social media links
   - Add your real projects
   - Upload your resume as `resume.pdf`

### Customization Guide

#### 1. Personal Information
Edit the following in `index.html`:
- Replace "Your Name" with your actual name
- Update email addresses and phone numbers
- Add your real social media links
- Modify the about section with your story

#### 2. Projects
Update the projects section with your actual projects:
- Replace project names and descriptions
- Update technology stacks
- Add real project links (GitHub, live demos)
- Include project screenshots if desired

#### 3. Skills
Modify the skills section to reflect your actual technical skills:
- Add or remove programming languages
- Update frameworks and tools
- Include any certifications or specializations

#### 4. Styling
Customize the appearance in `styles.css`:
- Change color scheme by modifying CSS variables
- Update fonts and typography
- Adjust spacing and layout as needed

#### 5. Resume
- Add your resume as `resume.pdf` in the root directory
- The download button will automatically link to this file

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (add this file)
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Optimized Images**: Uses CSS for icons instead of heavy images
- **Minimal Dependencies**: Only essential external libraries
- **Fast Loading**: Optimized CSS and JavaScript
- **Mobile First**: Responsive design that works on all devices

## Deployment

### Option 1: GitHub Pages (Free)
1. Upload your files to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly
3. You can connect to a custom domain later

### Option 3: Vercel (Free)
1. Connect your GitHub repository to Vercel
2. Deploy with one click
3. Automatic deployments on code changes

## Customization Tips

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any interactive features in `script.js`
4. Update navigation if needed

### Changing Colors
The main color scheme uses:
- Primary: `#2563eb` (blue)
- Accent: `#fbbf24` (yellow)
- Background: `#ffffff` (white)
- Text: `#1f2937` (dark gray)

### Adding Animations
The site includes several CSS animations:
- Fade-in effects on scroll
- Hover animations on interactive elements
- Smooth transitions throughout

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## Contact Form

The contact form includes:
- Client-side validation
- Email format checking
- Success/error notifications
- Form reset after submission

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Use a service like Formspree or Netlify Forms
3. Integrate with an email service

## Troubleshooting

### Common Issues

1. **Resume not downloading**: Make sure `resume.pdf` exists in the root directory
2. **Images not loading**: Check file paths and ensure images are in the correct folder
3. **Mobile menu not working**: Ensure JavaScript is enabled in the browser
4. **Styling issues**: Check for CSS syntax errors in the browser console

### Browser Console
Open browser developer tools (F12) to see any JavaScript errors or warnings.

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search for similar issues online
3. Create an issue in the repository
4. Contact the developer

---

**Happy coding!** 🚀

Remember to update all placeholder content with your actual information before deploying your portfolio.
