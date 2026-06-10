
const buttons = document.querySelectorAll('.nav-btn');
const activeIndex = localStorage.getItem("activeNav");

if (activeIndex != null) {
    buttons[activeIndex].classList.add("active");
}

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove active from all
        buttons.forEach(b => b.classList.remove("active"));
        // Add active to clicked one
        btn.classList.add('active')

        // Store the index in localstorage
        localStorage.setItem("activeNav", index)
    });
});


const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// Create dots dynamically
images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i == 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
    index = i;
    // Use the width of the slider instead of hardcoding
    const slideWidth = document.querySelector('.img-slider').clientWidth;
    slides.style.transform = `translateX(${-index * 560}px)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}

// Auto slide every 3 seconds
setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
}, 5000)