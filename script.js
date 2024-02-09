const button = document.getElementById('drop-button');
// const heart = document.getElementById('dropping-heart');

button.addEventListener('click', () => {
  heart.classList.add('shake'); // Optional shake animation
  setTimeout(() => {
    heart.classList.remove('shake');
  }, 500); // Adjust shake duration if needed
});

const container = document.querySelector('.message');
// const heart = document.getElementById('dropping-heart');


button.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  container.appendChild(heart);
    }
);