// pre loder start
window.addEventListener("load", () => {
  // Get the time to ensure the preloader stays visible for a minimum time
  const minDuration = 1000; // Minimum duration for preloader in milliseconds
  const startTime = Date.now();

  // Apply overflow hidden to the body to prevent scrolling
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const elapsedTime = Date.now() - startTime;
    const delay = Math.max(minDuration - elapsedTime, 0); // Ensure at least 1 second

    setTimeout(() => {
      // Hide preloader
      document.getElementById('preloader').style.display = 'none';
      
      // Show the main content
      // document.getElementById('content').style.display = 'block';
      
      // Restore normal page scroll behavior
      document.body.style.overflow = 'auto'; // Enable scrolling again
    }, delay);
  }, 0);
});


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


//cursor

