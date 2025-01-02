
// Team Section start

  // Intersection Observer to trigger animations when the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is in view
  });

  // Observe the team section
  const teamSection = document.querySelector('.team-section');
  observer.observe(teamSection);


// Team Section end 

// slide start

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
});

// slide end