# Urbania Taxi Website

A modern, responsive website for Urbania Taxi service built from scratch with HTML, CSS, and JavaScript. Features a beautiful design, interactive booking form, and mobile-responsive layout.

![Urbania Taxi Website](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🚀 Features

### ✨ Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth scroll animations and hover effects
- **Modern UI/UX**: Clean, professional design with excellent user experience
- **Brand Identity**: Consistent color scheme and typography

### 📱 Interactive Components
- **Booking Form**: Complete taxi booking system with validation
- **Contact Form**: Professional contact form with email validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Notification System**: Success and error notifications for user feedback

### 🎯 Sections
1. **Hero Section**: Eye-catching landing area with booking form
2. **Services**: Three main service categories (City Rides, Airport Transfer, Emergency)
3. **Features**: Why choose Urbania Taxi
4. **About**: Company information and statistics
5. **Contact**: Contact information and inquiry form
6. **Footer**: Complete site navigation and social links

### 🔧 Technical Features
- **Form Validation**: Client-side validation for all forms
- **Date/Time Handling**: Smart date picker with future date validation
- **Counter Animations**: Animated statistics counters
- **Intersection Observer**: Elements animate when scrolled into view
- **Local Storage**: Remember user preferences (if needed)

## 📁 File Structure

```
urbania-taxi/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs directly in browser

### Installation
1. **Clone or Download**: Get the project files
2. **Open**: Simply open `index.html` in your web browser
3. **That's it!** The website is ready to use

### Local Development
```bash
# If you want to serve it locally (optional)
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Then open http://localhost:8000 in your browser
```

## 🎨 Customization

### Colors
The website uses a modern color palette that can be easily customized in `styles.css`:

```css
/* Primary brand color (orange/amber) */
#f59e0b

/* Dark colors for text */
#1f2937, #374151

/* Light colors for backgrounds */
#f9fafb, #e5e7eb

/* Gradient backgrounds */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Content
Update the content in `index.html`:
- **Company Information**: Change company name, description, and contact details
- **Services**: Modify the three service cards
- **Statistics**: Update the numbers in hero and about sections
- **Contact Information**: Replace phone numbers and email addresses

### Images
The current design uses Font Awesome icons and CSS gradients. To add real images:
1. Create an `images/` folder
2. Add your images
3. Replace the `.image-placeholder` divs with `<img>` tags

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration

### Contact Information
Update these in `index.html`:
- Phone: `+1 (555) 123-TAXI`
- Email: `info@urbaniataxÄ.com`
- Address: `123 Main Street, Downtown, City 12345`

### Google Fonts
The website uses Inter font family. To change:
1. Update the Google Fonts link in `<head>`
2. Update `font-family` in CSS

### Font Awesome Icons
Icons are loaded from CDN. For offline use:
1. Download Font Awesome
2. Host locally
3. Update the link in `<head>`

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Connect your repository to Netlify
2. Deploy automatically on push

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory

## 🎯 Performance Optimization

The website is already optimized for performance:
- **Minimal Dependencies**: Only external fonts and icons
- **Optimized CSS**: Efficient selectors and minimal unused code
- **Compressed Assets**: Uses CDN for external resources
- **Mobile-First**: Responsive design reduces mobile load times

## 🔒 Security Considerations

- **Form Validation**: Client-side validation (add server-side for production)
- **XSS Prevention**: Sanitize user inputs in production
- **HTTPS**: Use HTTPS in production for secure form submissions

## 🤝 Contributing

Want to improve the website?
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- 📧 Email: info@urbaniataxÄ.com
- 📱 Phone: +1 (555) 123-TAXI
- 🌐 Website: Your deployed URL

## 🚀 Future Enhancements

Potential features to add:
- **Real-time Booking**: Integration with booking API
- **GPS Tracking**: Live ride tracking
- **Payment Gateway**: Online payment processing
- **User Accounts**: Customer login and ride history
- **Driver App**: Companion app for drivers
- **Multi-language**: Support for multiple languages
- **Push Notifications**: Real-time updates
- **Analytics**: Google Analytics integration

---

Built with ❤️ for Urbania Taxi | © 2024 All Rights Reserved
  