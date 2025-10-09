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

// Carrossel de Projetos
const projetosCarousel = document.querySelector(".projetos-carousel");
const carouselButtons = document.querySelectorAll(".carousel-button");
const carouselDotsContainer = document.querySelector(".carousel-dots");

if (projetosCarousel) {
    let currentIndex = 0;
    let itemsPerView = 3; // Default for desktop

    const updateItemsPerView = () => {
        if (window.innerWidth <= 768) {
            itemsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            itemsPerView = 2;
        } else {
            itemsPerView = 3;
        }
    };

    const updateCarousel = () => {
        updateItemsPerView();
        const itemWidth = projetosCarousel.children[0].offsetWidth;
        projetosCarousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        updateDots();
    };

    const createDots = () => {
        carouselDotsContainer.innerHTML = "";
        const totalItems = projetosCarousel.children.length;
        const totalDots = Math.ceil(totalItems / itemsPerView);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentIndex = i * itemsPerView;
                updateCarousel();
            });
            carouselDotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        const dots = document.querySelectorAll(".carousel-dots .dot");
        dots.forEach((dot, index) => {
            if (index === Math.floor(currentIndex / itemsPerView)) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    carouselButtons.forEach(button => {
        button.addEventListener("click", () => {
            const totalItems = projetosCarousel.children.length;
            const totalDots = Math.ceil(totalItems / itemsPerView);

            if (button.classList.contains("prev")) {
                currentIndex = Math.max(0, currentIndex - itemsPerView);
            } else {
                currentIndex = Math.min(totalItems - itemsPerView, currentIndex + itemsPerView);
            }
            updateCarousel();
        });
    });

    window.addEventListener("resize", () => {
        updateItemsPerView();
        createDots(); // Recreate dots on resize to adjust for itemsPerView
        updateCarousel();
    });

    updateItemsPerView();
    createDots();
    updateCarousel();
}

// Integração com Mapa Interativo (já implementado via iframe no HTML)

// Seção de Depoimentos (Adicionando os depoimentos reformulados)
const sobreSection = document.getElementById("sobre");
if (sobreSection) {
    const sobreContent = sobreSection.querySelector(".sobre-content");
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
    sobreContent.insertAdjacentHTML("afterend", depoimentosHtml);
}

// Otimização de Performance (já coberto por lazy-load e minificação implícita do JS/CSS)



