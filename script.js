document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const htmlElement = document.documentElement;

    const updateLang = (lang) => {
        htmlElement.setAttribute('lang', lang);
        langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        localStorage.setItem('tm-port-lang', lang);
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => updateLang(btn.dataset.lang));
    });

    updateLang(localStorage.getItem('tm-port-lang') || 'pt');

    // 2. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
