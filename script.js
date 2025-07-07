// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Booking Form Handler
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            pickup: document.getElementById('pickup').value,
            destination: document.getElementById('destination').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            passengers: document.getElementById('passengers').value
        };
        
        // Validate form data
        if (!formData.pickup || !formData.destination || !formData.date || !formData.time || !formData.passengers) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Check if date is in the future
        const selectedDate = new Date(formData.date + 'T' + formData.time);
        const currentDate = new Date();
        
        if (selectedDate <= currentDate) {
            showNotification('Please select a future date and time', 'error');
            return;
        }
        
        // Simulate booking process
        const bookBtn = bookingForm.querySelector('.book-btn');
        const originalText = bookBtn.innerHTML;
        
        bookBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        bookBtn.disabled = true;
        
        setTimeout(() => {
            bookBtn.innerHTML = originalText;
            bookBtn.disabled = false;
            
            showNotification('Booking request submitted successfully! We will contact you shortly.', 'success');
            bookingForm.reset();
        }, 2000);
    });
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[placeholder="Your Email"]').value;
        const subject = formData.get('subject') || contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate sending message
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            contactForm.reset();
        }, 2000);
    });
    
    // Set today's date as minimum for date input
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        // Set default date to today
        if (!dateInput.value) {
            dateInput.value = today;
        }
    }
    
    // Set default time to current time + 1 hour
    const timeInput = document.getElementById('time');
    if (timeInput && !timeInput.value) {
        const now = new Date();
        now.setHours(now.getHours() + 1);
        const timeString = now.toTimeString().slice(0, 5);
        timeInput.value = timeString;
    }
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-item, .about-stat').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS classes for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .feature-item, .about-stat {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .service-card.animate-in, .feature-item.animate-in, .about-stat.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Add phone number click functionality
    document.querySelectorAll('a[href^="tel:"], p').forEach(element => {
        if (element.textContent.includes('+1 (555) 123-TAXI')) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                window.location.href = 'tel:+15551232829';
            });
        }
    });
    
    // Add email click functionality
    document.querySelectorAll('p').forEach(element => {
        if (element.textContent.includes('@urbaniataxÄ.com')) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                window.location.href = 'mailto:info@urbaniataxÄ.com';
            });
        }
    });
    
    // FAQ Section (if needed later)
    function createFAQ() {
        const faqData = [
            {
                question: "How do I book a taxi?",
                answer: "You can book a taxi through our website using the booking form, or call us directly at +1 (555) 123-TAXI."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept cash, credit cards, debit cards, and mobile payment apps like Apple Pay and Google Pay."
            },
            {
                question: "Are your drivers licensed and insured?",
                answer: "Yes, all our drivers are professionally licensed, background-checked, and fully insured for your safety."
            },
            {
                question: "Do you provide 24/7 service?",
                answer: "Yes, we provide round-the-clock taxi services 365 days a year, including holidays."
            }
        ];
        
        return faqData;
    }
    
    // Add loading animation for booking button
    function addLoadingAnimation() {
        const bookBtn = document.querySelector('.book-btn');
        if (bookBtn) {
            bookBtn.addEventListener('mouseenter', function() {
                this.querySelector('i').style.transform = 'translateX(5px)';
            });
            
            bookBtn.addEventListener('mouseleave', function() {
                this.querySelector('i').style.transform = 'translateX(0)';
            });
        }
    }
    
    // Call the function
    addLoadingAnimation();
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add typing effect to hero title (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target') || parseFloat(counter.textContent.replace(/[^\d.]/g, ''));
                const count = +counter.getAttribute('data-count') || 0;
                
                const increment = target / 100;
                
                if (count < target) {
                    counter.setAttribute('data-count', count + increment);
                    if (counter.textContent.includes('+')) {
                        counter.textContent = Math.ceil(count + increment) + '+';
                    } else if (counter.textContent.includes('%')) {
                        counter.textContent = Math.ceil(count + increment) + '%';
                    } else if (counter.textContent.includes('K+')) {
                        counter.textContent = Math.ceil(count + increment) + 'K+';
                    } else {
                        counter.textContent = counter.textContent.includes('/') ? '24/7' : Math.ceil(count + increment);
                    }
                    setTimeout(updateCount, 10);
                } else {
                    counter.textContent = counter.textContent;
                }
            };
            
            // Set initial data-target
            const originalText = counter.textContent;
            if (originalText.includes('10K+')) {
                counter.setAttribute('data-target', '10000');
            } else if (originalText.includes('500+')) {
                counter.setAttribute('data-target', '500');
            } else if (originalText.includes('100K+')) {
                counter.setAttribute('data-target', '100000');
            } else if (originalText.includes('98%')) {
                counter.setAttribute('data-target', '98');
            } else if (originalText.includes('8+')) {
                counter.setAttribute('data-target', '8');
            }
            
            // Start animation when element is visible
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
    // Initialize counter animation
    animateCounters();
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.3s ease;
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-success .notification-content i:first-child {
            color: #10b981;
        }
        
        .notification-error .notification-content i:first-child {
            color: #ef4444;
        }
        
        .notification-success {
            border-left: 4px solid #10b981;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: #6b7280;
            margin-left: auto;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            background: #f3f4f6;
            color: #374151;
        }
        
        @media (max-width: 480px) {
            .notification {
                left: 20px;
                right: 20px;
                max-width: none;
                transform: translateY(-100px);
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification-styles]')) {
        style.setAttribute('data-notification-styles', 'true');
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}