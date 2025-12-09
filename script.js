// Initialize AOS
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init();

            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            const backToTop = document.getElementById('back-to-top');

            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                    backToTop.classList.remove('opacity-0', 'invisible');
                    backToTop.classList.add('opacity-100', 'visible');
                } else {
                    navbar.classList.remove('scrolled');
                    backToTop.classList.add('opacity-0', 'invisible');
                    backToTop.classList.remove('opacity-100', 'visible');
                }
            });

            // Mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const menuClose = document.getElementById('menu-close');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.remove('translate-x-full');
            });

            menuClose.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('translate-x-full');
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Back to top button
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Reservation form submission
            const reservationForm = document.getElementById('reservation-form');
            const successModal = document.getElementById('success-modal');
            const closeModal = document.getElementById('close-modal');

            reservationForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Simulate form submission
                setTimeout(() => {
                    successModal.classList.remove('hidden');
                    reservationForm.reset();
                }, 1000);
            });

            closeModal.addEventListener('click', function() {
                successModal.classList.add('hidden');
            });

            // Close modal when clicking outside
            successModal.addEventListener('click', function(e) {
                if (e.target === successModal) {
                    successModal.classList.add('hidden');
                }
            });
        });
