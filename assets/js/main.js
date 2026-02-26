document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Handle Loader Dismissal
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('loaded');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 800);
        }
    });

    // Mobile Menu Toggling
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggleBtn = document.querySelector('.mobile-toggle-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileLinks = document.querySelectorAll('#mobile-menu-panel a');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(true);
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));
    }

    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', () => toggleMenu(false));
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Profile Dropdown Toggling
    const profileToggleBtn = document.querySelector('.profile-toggle-btn');
    const profileDropdown = document.getElementById('profile-dropdown');

    const toggleProfileDropdown = (show) => {
        if (show === undefined) {
            profileDropdown.classList.toggle('show');
        } else if (show) {
            profileDropdown.classList.add('show');
        } else {
            profileDropdown.classList.remove('show');
        }
    };

    if (profileToggleBtn && profileDropdown) {
        profileToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleProfileDropdown();
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (profileDropdown.classList.contains('show') &&
                !profileDropdown.contains(e.target) &&
                !profileToggleBtn.contains(e.target)) {
                toggleProfileDropdown(false);
            }
        });
    }

    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });

    // Initialize Hero Slider if elements exist
    initHeroSlider();
});

/**
 * Shows a custom notification inline or as toast
 */
function showNotification(message, type = 'info', targetElement = null) {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `notification-toast ${type} show`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            if (container.children.length === 0) container.remove();
        }, 300);
    }, 3000);
}

function initHeroSlider() {
    const bgElement = document.getElementById('hero-bg');
    const titleElement = document.getElementById('hero-title');
    const descElement = document.getElementById('hero-desc');

    if (!bgElement || !titleElement || !descElement) return;

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1532472601364-dd1d9bde108b?q=80&w=1600&auto=format&fit=crop",
            title: 'STARTUP <span class="text-brand-orange">WEB</span>',
            desc: 'Pioneering precision at <span class="text-white font-semibold">StartupWeb</span>. We combine industrial synergy with high-tech manufacturing to deliver excellence across automotive and structural sectors.'
        }
    ];

    let currentSlide = 0;
    const intervalTime = 10000;

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        const slide = slides[currentSlide];

        titleElement.classList.add('opacity-0');
        descElement.classList.add('opacity-0');

        setTimeout(() => {
            bgElement.style.backgroundImage = `url('${slide.image}')`;
            titleElement.innerHTML = slide.title;
            descElement.innerHTML = slide.desc;
            titleElement.classList.remove('opacity-0');
            descElement.classList.remove('opacity-0');
        }, 500);

    }, intervalTime);
}
