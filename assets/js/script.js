document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SISTEMA DE ALTO CONTRASTE (PERSISTENTE)
    const contrastToggle = document.getElementById('contrast-toggle');
    
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrast', 'true');
        } else {
            localStorage.setItem('highContrast', 'false');
        }
    });

    // 2. BARRA DE PROGRESSO DE LEITURA SUPERIOR
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
        
        // 3. EXIBIÇÃO DO BOTÃO VOLTAR AO TOPO
        const topBtn = document.getElementById('topBtn');
        if (winScroll > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    document.getElementById('topBtn').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const button = document.getElementById('hamburgerBtn');
    
    menu.classList.toggle('active');
    button.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const button = document.getElementById('hamburgerBtn');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        button.classList.remove('active');
    }
}