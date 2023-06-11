document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('.section-container');

  window.addEventListener('scroll', function () {
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (
        scrollPosition >= sectionTop - window.innerHeight * 0.5 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        section.classList.add('animated');
      } else {
        section.classList.remove('animated');
      }
    });
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    });
  });
});
