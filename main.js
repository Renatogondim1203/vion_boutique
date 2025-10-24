// === ANIMAÇÃO DE TÍTULOS DE SERVIÇOS ===
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os títulos dentro dos cards de serviço
  const serviceTitles = document.querySelectorAll(".service h4");

  // Cria um observador para detectar quando os títulos entram na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aplica a classe de animação quando visível
        entry.target.classList.add("fade-in");
      } else {
        // Remove a animação ao sair da tela (opcional)
        entry.target.classList.remove("fade-in");
      }
    });
  }, {
    threshold: 0.5 // 50% do elemento visível para ativar
  });

  // Observa cada título individualmente
  serviceTitles.forEach((title) => {
    observer.observe(title);
  });
});


// === ANIMAÇÃO DA LOGO NA SEÇÃO HERO (MOBILE) ===
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".hero-logo");

  // Aplica animação apenas em telas pequenas
  if (logo && window.innerWidth <= 680) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Logo visível com animação de entrada
          logo.style.opacity = "1";
          logo.style.transform = "translate(-50%, -50%) translateY(0)";
        } else {
          // Logo oculta com leve deslocamento
          logo.style.opacity = "0";
          logo.style.transform = "translate(-50%, -50%) translateY(20px)";
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(logo);
  }
});


// === MENU MOBILE TOGGLE E FECHAMENTO AUTOMÁTICO ===
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-mobile");

  // Alterna visibilidade do menu ao clicar no botão hambúrguer
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita propagação para o documento
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.style.display = "none";
    }
  });

  // Fecha o menu ao clicar em qualquer link interno
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });
});


// === ANIMAÇÃO DE ENTRADA NA SEÇÃO SOBRE JOSÉ NETO ===
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos de texto e imagem da seção "about-jose"
  const joseElements = document.querySelectorAll(".jose-text, .jose-img");

  // Observa quando os elementos entram na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in"); // Aplica animação
      }
    });
  }, { threshold: 0.4 });

  // Observa cada elemento
  joseElements.forEach((el) => observer.observe(el));
});


// === CARROSSEL DE DEPOIMENTOS COM NAVEGAÇÃO E AUTO-TROCA ===
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll('.testimonial'); // Todos os depoimentos
  const dots = document.querySelectorAll('.dot'); // Bolinhas de navegação
  let current = 0; // Índice atual do depoimento

  // Função para mostrar o depoimento correspondente ao índice
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index); // Ativa o depoimento
      dots[i].classList.toggle('active', i === index); // Ativa a bolinha
    });
    current = index;
  }

  // Adiciona evento de clique nas bolinhas para trocar manualmente
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showTestimonial(i));
  });

  // Troca automática de depoimento a cada 6 segundos
  setInterval(() => {
    let next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }, 6000);
});