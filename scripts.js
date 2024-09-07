document.addEventListener('DOMContentLoaded', () => {
    // Suavizar a rolagem para âncoras
    const links = document.querySelectorAll('nav#Blog a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Botão de rolar para o topo
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Topo';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Alterar o título da aba conforme o conteúdo da página
    const updateTitleBasedOnPage = () => {
        const pageTitles = {
            'Introdução.html': 'Introdução: Yu Yu Hakusho',
            'História.html': 'História: Yu Yu Hakusho',
            'Personagens.html': 'Personagens: Yu Yu Hakusho',
            'curiosiadades.html': 'Curiosidades: Yu Yu Hakusho'
        };
        const currentPage = window.location.pathname.split('/').pop();
        document.title = pageTitles[currentPage] || 'Blog de Yu Yu Hakusho';
    };

    updateTitleBasedOnPage();
});
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchData();
