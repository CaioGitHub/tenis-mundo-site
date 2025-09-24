// Slider functionality for index.html
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    let currentIndex = 0;
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dotsContainer = document.querySelector('.slider-dots');

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Ir para slide ' + (i+1));
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('.slider-dot');

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function goToSlide(idx) {
        currentIndex = idx;
        updateSlider();
    }

    // Previous button event
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    };

    // Next button event
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    };

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 5000);
});
