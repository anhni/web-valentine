const container = document.querySelector('.message');
// const heart = document.getElementById('dropping-heart');
function addHeart(){
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  container.appendChild(heart);
}

const button_1 = document.getElementById('button-1');
button_1.addEventListener('click', () => {
  addHeart();
    }
);

const button_2 = document.getElementById('button-2');
button_2.addEventListener('click', () => {
  addHeart();
    }
);

const button_3 = document.getElementById('button-3');
button_3.addEventListener('click', () => {
  for (let i = 0; i < 4; i++) {
    // setTimeout(addHeart(), Math.floor(Math.random() * i))
    const intervalId = setInterval(() => {
      // Do something every 100ms
      addHeart();
    }, 300);
  }
  // setTimeout(addHeart(), 3)
  // setTimeout(addHeart(), 4)
  // setTimeout(addHeart(), 6)

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
    }
);

const slides = document.querySelectorAll('.slideshow-inner img');
const slideIndex = 0; // Current slide index

function changeSlide(index) {
  slides[slideIndex].classList.remove('active');
  slides[index].classList.add('active');
  document.documentElement.style.setProperty('--slide-index', index);
}

// Start with the first slide active
slides[slideIndex].classList.add('active');

// Automatic slide change every 5 seconds
setInterval(() => {
  changeSlide((slideIndex + 1) % slides.length);
}, 5000);

// Button click events
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  changeSlide((slideIndex - 1 + slides.length) % slides.length);
});

nextButton.addEventListener('click', () => {
  changeSlide((slideIndex + 1) % slides.length);
});
