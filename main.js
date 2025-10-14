document.addEventListener("DOMContentLoaded", function () {
  const serviceTitles = document.querySelectorAll(".service h4");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in"); // remove ao sair da tela
      }
    });
  }, {
    threshold: 0.5
  });

  serviceTitles.forEach((title) => {
    observer.observe(title);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".hero-logo");

  if (logo && window.innerWidth <= 680) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logo.style.opacity = "1";
          logo.style.transform = "translate(-50%, -50%) translateY(0)";
        } else {
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


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-mobile");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    // Fecha ao clicar fora
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = "none";
      }
    });

    // Fecha ao clicar em um link
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.style.display = "none";
      });
    });
  });


    document.addEventListener("DOMContentLoaded", function () {
    const joseElements = document.querySelectorAll(".jose-text, .jose-img");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.4 });

    joseElements.forEach((el) => observer.observe(el));
  });


    const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showTestimonial(i));
  });

  setInterval(() => {
    let next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }, 6000); // troca a cada 6 segundos