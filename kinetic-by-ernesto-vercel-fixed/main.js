document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-carbon-900/90', 'backdrop-blur-md', 'shadow-lg', 'py-3');
            header.classList.remove('bg-transparent', 'py-5');
        } else {
            header.classList.remove('bg-carbon-900/90', 'backdrop-blur-md', 'shadow-lg', 'py-3');
            header.classList.add('bg-transparent', 'py-5');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
        } else {
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            mobileMenu.classList.add('max-h-0', 'opacity-0');
        }
    });

    // --- Smooth Scroll & Active Link ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Close mobile menu if open
            if (isMenuOpen) {
                isMenuOpen = false;
                mobileMenu.classList.remove('max-h-96', 'opacity-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#inicio') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Portfolio Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => {
                b.classList.remove('bg-neon-lime', 'text-carbon-900', 'font-bold');
                b.classList.add('bg-transparent', 'text-gray-400');
            });
            btn.classList.remove('bg-transparent', 'text-gray-400');
            btn.classList.add('bg-neon-lime', 'text-carbon-900', 'font-bold');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('active'), 50); // Re-trigger anim
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active');
                }
            });
        });
    });

    // --- Portfolio Modal ---
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTools = document.getElementById('modal-tools');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const cat = item.getAttribute('data-category');
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');
            const img = item.getAttribute('data-img');
            const tools = item.getAttribute('data-tools').split(', ');

            modalImg.src = img;
            modalCategory.textContent = cat;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            
            modalTools.innerHTML = '';
            tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = 'px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300';
                span.textContent = tool;
                modalTools.appendChild(span);
            });

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const hideModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    // --- Contact Form ---
    const form = document.getElementById('quoteForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                formStatus.textContent = '¡Mensaje enviado correctamente! Te contactaré pronto.';
                formStatus.className = 'text-center text-sm mt-4 text-neon-lime block';
                form.reset();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            formStatus.textContent = 'Hubo un error. Intenta contactar por WhatsApp.';
            formStatus.className = 'text-center text-sm mt-4 text-neon-red block';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});