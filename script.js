document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mobile-nav');
    const header = document.querySelector('.header');

    // Abre/fecha menu hambúrguer
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Links do menu
    const navLinks = nav.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            // Fecha menu
            nav.classList.remove('active');

            setTimeout(() => {
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });

    // Corrige também o botão "Fale Conosco" da home
    const faleConosco = document.querySelector('.home .btn');
    if (faleConosco) {
        faleConosco.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector('#contato');
            const headerHeight = header.offsetHeight;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }
});


