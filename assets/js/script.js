/*

TemplateMo 593 personal shape

https://templatemo.com/tm-593-personal-shape

*/

// JavaScript Document

        // Mobile menu functionality
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Enhanced Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Staggered animation for portfolio items
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.portfolio-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.1 });

        // Observe all animation elements
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            animatedElements.forEach(el => observer.observe(el));

            const portfolioSection = document.querySelector('.portfolio-grid');
            if (portfolioSection) {
                portfolioObserver.observe(portfolioSection);
            }
        });

        // Enhanced smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Enhanced form submission with better UX
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = document.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;

                // Add loading state
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.background = 'linear-gradient(135deg, #94a3b8, #64748b)';

                // Simulate form submission with better feedback
                setTimeout(() => {
                    submitBtn.textContent = 'We will contact you within 3 days!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

                    // Show success animation
                    submitBtn.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        submitBtn.style.transform = 'scale(1)';
                    }, 200);

                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        contactForm.reset();
                    }, 3000);
                }, 2000);
            });
        }

        // Enhanced parallax effect for hero background
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // Add subtle hover effects to skill tags
        const skillTags = document.querySelectorAll('.skill-tag');
        if (skillTags.length > 0) {
            skillTags.forEach(tag => {
                tag.addEventListener('mouseenter', () => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                });

                tag.addEventListener('mouseleave', () => {
                    tag.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Hover effects for feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length > 0) {
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = 'var(--shadow-2xl)';
                });

                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = 'var(--shadow-lg)';
                });
            });
        }

        // Hover effects for testimonial cards
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        if (testimonialCards.length > 0) {
            testimonialCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.03)';
                    this.style.boxShadow = 'var(--shadow-2xl)';
                    const avatar = this.querySelector('div[style*="background: var(--gradient-"]');
                    if (avatar) {
                        avatar.style.transform = 'scale(1.1) rotate(5deg)';
                        avatar.style.transition = 'all 0.3s ease';
                    }
                });

                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = 'var(--shadow-xl)';
                    const avatar = this.querySelector('div[style*="background: var(--gradient-"]');
                    if (avatar) {
                        avatar.style.transform = 'scale(1) rotate(0deg)';
                    }
                });
            });
        }

        // FAQ Accordion functionality with new design
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length > 0) {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon');

                // Initially hide answers
                answer.style.display = 'none';
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.overflow = 'hidden';
                answer.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

                // Make questions clickable
                question.addEventListener('click', function() {
                    const isOpen = answer.style.display === 'block';

                    // Close all other FAQs
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherIcon = otherItem.querySelector('.faq-icon');
                            otherAnswer.style.display = 'none';
                            otherAnswer.style.maxHeight = '0';
                            otherAnswer.style.opacity = '0';
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    });

                    if (isOpen) {
                        // Close
                        answer.style.display = 'none';
                        answer.style.maxHeight = '0';
                        answer.style.opacity = '0';
                        icon.style.transform = 'rotate(0deg)';
                        item.style.boxShadow = 'var(--shadow-md)';
                    } else {
                        // Open
                        answer.style.display = 'block';
                        setTimeout(() => {
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                            answer.style.opacity = '1';
                        }, 10);
                        icon.style.transform = 'rotate(180deg)';
                        item.style.boxShadow = 'var(--shadow-xl)';
                    }
                });

                // Hover effect for FAQ items
                item.addEventListener('mouseenter', function() {
                    if (answer.style.display !== 'block') {
                        this.style.transform = 'translateY(-3px)';
                    }
                });

                item.addEventListener('mouseleave', function() {
                    if (answer.style.display !== 'block') {
                        this.style.transform = 'translateY(0)';
                    }
                });
            });
        }

        // Cookie Consent Banner
        // Check if user has already accepted cookies
        if (!localStorage.getItem('cookieConsent')) {
            // Create cookie banner
            const banner = document.createElement('div');
            banner.id = 'cookie-banner';
            banner.style.cssText = `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.95);
                color: white;
                padding: 1.5rem;
                z-index: 10000;
                backdrop-filter: blur(10px);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
            `;

            banner.innerHTML = `
                <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                    <div style="flex: 1; min-width: 300px;">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">We use cookies</h4>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">This website uses cookies to enhance your browsing experience and provide personalized content. By continuing to use this site, you consent to our use of cookies.</p>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <button id="accept-cookies" style="
                            background: var(--gradient-primary);
                            color: white;
                            border: none;
                            padding: 0.75rem 1.5rem;
                            border-radius: 25px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        ">Accept</button>
                        <button id="decline-cookies" style="
                            background: transparent;
                            color: white;
                            border: 1px solid rgba(255, 255, 255, 0.3);
                            padding: 0.75rem 1.5rem;
                            border-radius: 25px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        ">Decline</button>
                    </div>
                </div>
            `;

            document.body.appendChild(banner);

            // Handle accept button
            document.getElementById('accept-cookies').addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'accepted');
                banner.remove();
            });

            // Handle decline button
            document.getElementById('decline-cookies').addEventListener('click', function() {
                localStorage.setItem('cookieConsent', 'declined');
                banner.remove();
            });

            // Add hover effects
            document.getElementById('accept-cookies').addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            document.getElementById('accept-cookies').addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            document.getElementById('decline-cookies').addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            document.getElementById('decline-cookies').addEventListener('mouseleave', function() {
                this.style.background = 'transparent';
            });
        }
