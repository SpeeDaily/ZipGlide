document.addEventListener("DOMContentLoaded", function() {
    // Dynamic text animation
    const names = ["Affordable Pricing", "Eassy Booking Process", "Safe & Clean Vehicles", "Flexible Rental Options","ZipGlide"];
    const slogans = ["Budget-friendly rates... ", "Book in a breeze... ", "Safe & Clean Vehicles...", "Your terms, your trip... ","Your ride your way! "];
    let index = 0;
    const dynamicName = document.querySelector("#cityName");
    const dynamicSlogan = document.querySelector("#citySlogan");

    function updateText() {
        dynamicName.textContent = names[index];
        dynamicSlogan.textContent = slogans[index];
        dynamicName.classList.remove('slideLeft');
        dynamicSlogan.classList.remove('slideRight');
        // Force reflow to restart the animation
        void dynamicName.offsetWidth;
        void dynamicSlogan.offsetWidth;
        dynamicName.classList.add('slideLeft');
        dynamicSlogan.classList.add('slideRight');
        index = (index + 1) % names.length;
    }

    setInterval(updateText, 5000);

    // Observing elements in the Rental Process section
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const rentalElementsToObserve = document.querySelectorAll('.rental-process h2, .rental-process .step');
    rentalElementsToObserve.forEach(element => {
        observer.observe(element);
    });

    // Available Cars section
    const cars = document.querySelectorAll('.car');
    const bookingButton = document.getElementById('bookingButton');

    cars.forEach(car => {
        car.addEventListener('click', function() {
            this.classList.toggle('selected');
            const selectedCars = document.querySelectorAll('.car.selected');
            bookingButton.style.display = selectedCars.length > 0 ? 'block' : 'none';
        });
    });

    // Testimonials slideshow
    const testimonials = document.querySelectorAll('.testimonial-slide');
    let testimonialIndex = 0;

    function showTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[testimonialIndex].classList.add('active');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    }

    setInterval(showTestimonial, 5000); // Automatic slideshow every 5 seconds

    // Services section visibility
    const services = document.querySelectorAll('.service');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom - windowHeight * 5 <= windowHeight &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to show services when they are in the viewport
    function showServices() {
        services.forEach(service => {
            if (isInViewport(service.parentElement)) {
                service.classList.add('visible');
            }
        });
    }

    // Show services initially if they are in the viewport
    showServices();

    // Show services when scrolling
    window.addEventListener('scroll', showServices);

    // Recheck visibility on page load
    window.addEventListener('load', showServices);

    // Language selector dropdown
    const languageSelector = document.querySelector('.language-selector');
    const languageMenu = document.getElementById('languageMenu');

    languageSelector.addEventListener('click', function() {
        languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Redirect to the selected language page
    const languageLinks = document.querySelectorAll('.language-menu a');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });
    });
});

function bookCar() {
    const selectedCars = Array.from(document.querySelectorAll('.car.selected')).map(car => car.dataset.car);
    if (selectedCars.length > 0) {
        sessionStorage.setItem("selectedCars", JSON.stringify(selectedCars));
        window.location.href = "/WebTourism/WebTourism-v1/booking.html";
    }
}

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const menuBars = document.querySelector(".menu-bars img");

    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
        menuBars.style.transform = "rotate(0deg)";
    } else {
        sideMenu.style.width = "250px";
        menuBars.style.transform = "rotate(90deg)";
    }
}

// Close the side menu if clicked outside
window.onclick = function(event) {
    const sideMenu = document.getElementById("side-menu");
    const menuBars = document.querySelector(".menu-bars img");

    if (event.target !== sideMenu && event.target !== menuBars) {
        sideMenu.style.width = "0";
        menuBars.style.transform = "rotate(0deg)";
    }
}
document.addEventListener("DOMContentLoaded", function() {
            const backgroundRed = document.getElementById("backgroundRed");
            const backgroundVideo = document.getElementById("backgroundVideo");

            // Show red background initially
            backgroundRed.style.display = "block";

            // Check when the video is loaded
            backgroundVideo.addEventListener("loadeddata", function() {
                // Hide red background and show video
                backgroundRed.style.display = "none";
                backgroundVideo.style.display = "block";
            });
        });
        window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.addEventListener('load', function() {
            image.style.display = 'block'; // or 'inline' depending on image type
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader when the DOM content is fully loaded
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});

window.addEventListener("load", function() {
    // Hide the loader when all media assets (images, videos, etc.) are loaded
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});
