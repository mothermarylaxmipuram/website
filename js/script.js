document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    
    hamburger.addEventListener('click', function() {
        // Always check the current state and set explicitly instead of toggle
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show', 'active');
            overlay.classList.remove('show');
        } else {
            navLinks.classList.add('show', 'active');
            overlay.classList.add('show');
        }
    });
    
    overlay.addEventListener('click', function() {
        navLinks.classList.remove('show', 'active');
        overlay.classList.remove('show');
    });
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const totalSlides = 7; // Number of images
    let currentSlide = 0;

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
        updateSlider();
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide
        updateSlider();
    }

    // Function to update the slider position
    function updateSlider() {
        const offset = -currentSlide * 100; // Calculate the offset for the slide
        slides.style.transform = `translateX(${offset}%)`; // Move the slides
    }

    // Auto-swiping every 3 seconds
    let autoSlideInterval = setInterval(showNextSlide, 3000);

    // Pause auto-slide on button hover
    const buttons = document.querySelectorAll('.slider-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        button.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(showNextSlide, 3000);
        });
    });

    // Add event listeners for manual navigation
    document.querySelector('.next-button').addEventListener('click', showNextSlide);
    document.querySelector('.prev-button').addEventListener('click', showPrevSlide);
});
//For animate Count
document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the counting
    function animateCount(element, targetCount, duration) {
        let startCount = 0;
        const increment = targetCount / (duration / 16); // 16ms per frame for smooth animation
        const updateCount = () => {
            startCount += increment;
            if (startCount < targetCount) {
                element.textContent = Math.ceil(startCount);
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = targetCount; // Ensure the final number is exact
            }
        };
        updateCount();
    }

    // Animate each count
    const familyCount = document.querySelector('.count-item:nth-child(1) .count');
    const anbiyansCount = document.querySelector('.count-item:nth-child(2) .count');
    const anbiyansTotalCount = document.querySelector('.count-item:nth-child(3) .count');

    animateCount(familyCount, 550, 2000); // Animate to 550 in 2 seconds
    animateCount(anbiyansCount, 2600, 2000); // Animate to 2200 in 2 seconds
    animateCount(anbiyansTotalCount, 23, 2000); // Animate to 19 in 2 seconds
});

// Readmore Button
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more-btn');
    const historyContent = document.querySelector('.history-content');

    readMoreBtn.addEventListener('click', function () {
        historyContent.classList.toggle('expanded'); // Toggle expanded class
        if (historyContent.classList.contains('expanded')) {
            readMoreBtn.textContent = 'Read Less'; // Change button text
        } else {
            readMoreBtn.textContent = 'Read More'; // Change button text
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        let newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlider();
            startSlider();
        });
    });

    // Pause on hover
    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // Initialize
    showSlide(0);
    startSlider();
});
//priests script
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.priests-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length; // Number of slides
    let currentSlide = 0;

    // Function to move the slider
    function moveSlider() {
        const offset = -currentSlide * 100; // Calculate the offset
        slider.style.transform = `translateX(${offset}%)`; // Move the slider
    }

    // Auto-swiping every 5 seconds
    let autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        moveSlider();
    }, 5000);

    // Manual navigation
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
        moveSlider();
        clearInterval(autoSlideInterval); // Reset auto-slide interval
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            moveSlider();
        }, 5000);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        moveSlider();
        clearInterval(autoSlideInterval); // Reset auto-slide interval
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            moveSlider();
        }, 5000);
    });
});
//parish news 
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    let currentSlide = 0;

    // Function to move the swiper
    function moveSwiper() {
        const offset = -currentSlide * 100; // Calculate the offset
        swiperWrapper.style.transform = `translateX(${offset}%)`; // Move the swiper
    }

    // Manual navigation
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
        moveSwiper();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        moveSwiper();
    });
});
//show news
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const showNewsBtn = document.querySelector('.show-news-btn');
    const dialog = document.getElementById('news-dialog');
    const closeBtn = document.querySelector('.close-btn');

    // Open dialog box when "Show News" is clicked
    showNewsBtn.addEventListener('click', () => {
        dialog.style.display = 'flex'; // Show dialog box
    });

    // Close dialog box when close button is clicked
    closeBtn.addEventListener('click', () => {
        dialog.style.display = 'none'; // Hide dialog box
    });

    // Close dialog box when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.style.display = 'none'; // Hide dialog box
        }
    });
});
//btn for sliders
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = document.querySelector('.slides img').clientWidth; // Width of one slide
let currentIndex = 0;

// Function to move to the next slide
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Function to move to the previous slide
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.children.length - 1; // Loop to the last slide
    }
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});
// Bulletproof Scroll to Top Function
function scrollToTop() {
    // Method 1: Modern smooth scrolling
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Method 2: Legacy scrolling
    try {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch(e) {}
    
    // Method 3: Animation fallback
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function(){
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
    
    // Method 4: Ultimate fallback
    setTimeout(function() {
      window.location.href = '#';
    }, 200);
  }
  
  // Initialize button
  document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // Show/hide based on scroll (optional)
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  });
