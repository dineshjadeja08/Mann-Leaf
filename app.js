/* ==========================================================================
   MANN & LEAF BRAND CUSTOM LOGIC
   Features: Theme Switcher, Mobile Navigation, Scroll Observers, Form Validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. STICKY HEADER SCROLL TRACKER
       -------------------------------------------------------------------------- */
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    const handleHeaderScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Trigger on initial load in case user refreshed down-page


    /* --------------------------------------------------------------------------
       2. MOBILE NAVIGATION DRAWER
       -------------------------------------------------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn-mobile');

    const toggleMenu = () => {
        const isOpen = navToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : ''; // Prevent scroll when open
    };

    const closeMenu = () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking navigation items
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on pressing Escape key for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
            navToggle.focus();
        }
    });


    /* --------------------------------------------------------------------------
       3. THEME TOGGLER (LIGHT/DARK MODES)
       -------------------------------------------------------------------------- */
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    // Retrieve saved user setting, or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    };

    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const nextTheme = isDarkMode ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });


    /* --------------------------------------------------------------------------
       4. SCROLL LAZY-FADE ANIMATION (INTERSECTION OBSERVER)
       -------------------------------------------------------------------------- */
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const animationOptions = {
        threshold: 0.15, // trigger when 15% of element is in view
        rootMargin: '0px 0px -50px 0px' // offset triggers slightly for better appearance
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it has loaded, we don't need to observe it again
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    animateElements.forEach(el => {
        animationObserver.observe(el);
    });


    /* --------------------------------------------------------------------------
       5. ACTIVE LINK TRACKER ON SCROLL
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section');
    const headerNavLinks = document.querySelectorAll('.nav-link');

    const activeLinkOptions = {
        threshold: 0.35, // Trigger active highlights mid-scroll
        rootMargin: '-80px 0px -40% 0px'
    };

    const activeLinkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                headerNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, activeLinkOptions);

    sections.forEach(section => {
        activeLinkObserver.observe(section);
    });


    /* --------------------------------------------------------------------------
       6. WHOLESALE FORM VALIDATION & MODAL SUCCESS STAGE
       -------------------------------------------------------------------------- */
    const form = document.getElementById('inquiry-form');
    const successCard = document.getElementById('form-success');
    const resetBtn = document.getElementById('reset-form-btn');

    // Input elements
    const nameInput = document.getElementById('partner-name');
    const shopInput = document.getElementById('shop-name');
    const qtyInput = document.getElementById('order-qty');
    const phoneInput = document.getElementById('partner-phone');
    const msgInput = document.getElementById('partner-msg');

    const setValidity = (inputElement, isValid, errorId) => {
        const group = inputElement.closest('.form-group');
        if (isValid) {
            group.classList.remove('invalid');
        } else {
            group.classList.add('invalid');
        }
    };

    // Indian Phone Validation Helper (Simple 10 digits check)
    const validatePhone = (phone) => {
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(phone.trim().replace(/\s+/g, ''));
    };

    // Validation logic for each field
    const validateField = (input) => {
        let isValid = true;

        if (input.id === 'partner-name') {
            isValid = input.value.trim().length >= 2;
        } else if (input.id === 'shop-name') {
            isValid = input.value.trim().length >= 2;
        } else if (input.id === 'order-qty') {
            const val = parseInt(input.value, 10);
            isValid = !isNaN(val) && val >= 50;
        } else if (input.id === 'partner-phone') {
            isValid = validatePhone(input.value);
        } else if (input.id === 'partner-msg') {
            isValid = input.value.trim().length >= 10;
        }

        setValidity(input, isValid);
        return isValid;
    };

    // Setup live validation on blur
    [nameInput, shopInput, qtyInput, phoneInput, msgInput].forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        // Remove invalid look instantly on user keyup
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            group.classList.remove('invalid');
        });
    });

    // Handle Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateField(nameInput);
        const isShopValid = validateField(shopInput);
        const isQtyValid = validateField(qtyInput);
        const isPhoneValid = validateField(phoneInput);
        const isMsgValid = validateField(msgInput);

        const isFormValid = isNameValid && isShopValid && isQtyValid && isPhoneValid && isMsgValid;

        if (isFormValid) {
            // Mock backend latency
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Hide Form and Show Custom Success Modal
                form.style.display = 'none';
                successCard.style.display = 'flex';

                // Reset button parameters
                submitBtn.textContent = 'Submit Inquiry';
                submitBtn.disabled = false;
            }, 1000);
        } else {
            // Focus on first invalid field
            const firstInvalid = form.querySelector('.form-group.invalid input, .form-group.invalid textarea');
            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    });

    // Handle Inquiry Form Reset
    resetBtn.addEventListener('click', () => {
        form.reset();
        
        // Remove any residue invalid styles
        const groups = form.querySelectorAll('.form-group');
        groups.forEach(g => g.classList.remove('invalid'));

        // Switch panels
        successCard.style.display = 'none';
        form.style.display = 'block';
    });

});
