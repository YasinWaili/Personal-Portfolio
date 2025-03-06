    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = toggleButton.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const topBar = document.querySelector('.top-bar');
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top', 'animate-on-scroll');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }

        if (window.scrollY > 200) {
            if (!scrollToTopBtn.classList.contains('in-view')) {
                scrollToTopBtn.classList.add('in-view');
            }
        } else {
            scrollToTopBtn.classList.remove('in-view');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const roles = ["Computer Scientist", "Software Developer", "Data Scientist", "Statistician"];
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;
    
        function typeEffect() {
            let subTextElement = document.getElementById("dynamic-text");
    
            if (!subTextElement) return; // Ensure element exists
    
            let currentText = roles[roleIndex];
            let displayText = currentText.substring(0, charIndex);
    
            subTextElement.textContent = displayText;
    
            if (!deleting && charIndex < currentText.length) {
                charIndex++;
                setTimeout(typeEffect, 100); // Typing speed
            } else if (deleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 50); // Deleting speed
            } else {
                deleting = !deleting;
                if (!deleting) {
                    roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
                }
                setTimeout(typeEffect, 1000); // Pause before switching roles
            }
        }
    
        typeEffect();
    });
    