// Menu Toggle para Mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active Link on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`#menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Salvar preferência do usuário
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Carregar preferência do usuário ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            mensagem: document.getElementById('mensagem').value
        };
        
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        contactForm.reset();
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.servico-categoria, .projeto-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Parallax Effect for Hero Section (simplified for video background)
window.addEventListener('scroll', () => {
    const heroVideoPlaceholder = document.querySelector('.hero-video-placeholder');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3; // Ajuste a velocidade do parallax
    
    if (heroVideoPlaceholder) {
        heroVideoPlaceholder.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Preload optimization
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Carrossel de Projetos (Exemplo Básico - será aprimorado)
const projetosGrid = document.querySelector('.projetos-grid');
if (projetosGrid) {
    // Implementação futura de um carrossel real com bibliotecas ou JS puro
    // Por enquanto, apenas um placeholder para a funcionalidade
}

// Integração com Mapa Interativo (Exemplo Básico - será aprimorado)
const contatoSection = document.getElementById('contato');
if (contatoSection) {
    // Implementação futura de mapa interativo (Google Maps API)
}

// Seção de Depoimentos (Adicionando os depoimentos reformulados)
const sobreSection = document.getElementById('sobre');
if (sobreSection) {
    const sobreContent = sobreSection.querySelector('.sobre-content');
    const depoimentosHtml = `
        <div class="depoimentos-section">
            <h2 class="section-title">O que nossos clientes dizem</h2>
            <div class="depoimentos-grid">
                <div class="depoimento-card">
                    <blockquote>
                        "A REFLETE ENGENHARIA demonstrou uma **excelência notável na administração de nossa obra**, superando as expectativas em cada etapa. A gestão impecável resultou em uma **execução em tempo recorde**, sem comprometer a qualidade. É um privilégio trabalhar com uma equipe que une **organização, cronograma rigoroso e um canteiro de obras exemplarmente limpo**."
                    </blockquote>
                </div>
                <div class="depoimento-card">
                    <blockquote>
                        "O diferencial da REFLETE ENGENHARIA reside em seu **recurso técnico inigualável**, fundamentado em uma vasta experiência e profundo conhecimento em engenharia. A expertise de anos de profissão de sua equipe se reflete em **soluções inovadoras e seguras**, garantindo a **satisfação plena, profissionalismo e entrega** de resultados que realmente importam."
                    </blockquote>
                </div>
                <div class="depoimento-card">
                    <blockquote>
                        "Nossa parceria com a REFLETE ENGENHARIA em projetos públicos na cidade de Maricá - RJ foi um **sucesso absoluto**. A capacidade de entrega da equipe, aliada a **profissionais qualificados e uma estrutura robusta**, garantiu a conclusão dos empreendimentos com a mais alta qualidade e dentro dos prazos estabelecidos. Uma referência em engenharia para o setor público."
                    </blockquote>
                </div>
            </div>
        </div>
    `;
    sobreContent.insertAdjacentHTML('afterend', depoimentosHtml);
}

// Otimização de Performance (já coberto por lazy-load e minificação implícita do JS/CSS)


