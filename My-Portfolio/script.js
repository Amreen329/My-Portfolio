// Typing Animation
const typingTexts = [
  'Full-Stack Web Developer',
  'Web Designer'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const currentText = typingTexts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typingSpeed = 500;
  }

  setTimeout(typeText, typingSpeed);
}

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Navbar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('.navbar-nav');

  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', function() {
      navbarToggler.classList.toggle('active');
      navbarNav.classList.toggle('active');
    });

    // Close navbar when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarNav.classList.remove('active');
        navbarToggler.classList.remove('active');
      });
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navbarNav.contains(event.target) || navbarToggler.contains(event.target);
      if (!isClickInsideNav && navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
        navbarToggler.classList.remove('active');
      }
    });
  }

  // Start typing animation
  typeText();

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Active nav link highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveSection);
highlightActiveSection(); // Call once on load

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with fade-in-up class
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
  
  animatedElements.forEach((el, index) => {
    const delay = el.getAttribute('data-delay') || 0;
    el.style.opacity = '0';
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;
    
    if (el.classList.contains('fade-in-up')) {
      el.style.transform = 'translateY(30px)';
    } else if (el.classList.contains('fade-in-left')) {
      el.style.transform = 'translateX(-30px)';
    } else if (el.classList.contains('fade-in-right')) {
      el.style.transform = 'translateX(30px)';
    }
    
    observer.observe(el);
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero && scrolled < window.innerHeight) {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.5;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
});

// Animate Pie Charts
function animatePieCharts() {
  const pieCharts = document.querySelectorAll('.pie-chart');
  
  pieCharts.forEach((chart, index) => {
    const percent = parseInt(chart.getAttribute('data-percent'));
    const degrees = (percent / 100) * 360;
    
    // Create animated conic gradient
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Delay each chart animation slightly for staggered effect
          setTimeout(() => {
            let currentDegrees = 0;
            const duration = 1500; // 1.5 seconds
            const startTime = performance.now();
            
            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              currentDegrees = degrees * easeOutCubic;
              
              // Create gradient colors
              const gradientColors = [
                '#667eea 0deg',
                '#667eea ' + currentDegrees + 'deg',
                '#e5e7eb ' + currentDegrees + 'deg',
                '#e5e7eb 360deg'
              ];
              
              chart.style.background = `conic-gradient(${gradientColors.join(', ')})`;
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                // Final state with exact values
                chart.style.background = `conic-gradient(
                  #667eea 0deg,
                  #667eea ${degrees}deg,
                  #e5e7eb ${degrees}deg,
                  #e5e7eb 360deg
                )`;
              }
            };
            
            requestAnimationFrame(animate);
          }, index * 100); // Stagger animation by 100ms per chart
          
          observer.unobserve(chart);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(chart);
  });
}

// Initialize pie chart animations
document.addEventListener('DOMContentLoaded', () => {
  animatePieCharts();
});

// Add ripple effect to buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
buttons.forEach(button => {
  button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Smooth page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Initialize body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';
