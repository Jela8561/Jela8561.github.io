const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageList = [
  'Germany.jpg',
  'South Korea.jpg',
  'Swiss.jpg',
  'Ukraine.jpg',
  'iceland.jpeg'
];

/* Alt text for each image */
const altText = {
  'Germany.jpg': 'Germany Hydrant',
  'South Korea.jpg': 'South Korean Hydrant',
  'Swiss.jpg': 'Swiss Hydrant',
  'Ukraine.jpg': 'Ukraine Hydrant',
  'iceland.jpeg': 'Iceland Hydrant'
};

/* Looping through images and adding to thumbnail bar */
for (let i = 0; i < imageList.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `/img/${imageList[i]}`);
  newImage.setAttribute('alt', altText[imageList[i]]);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `/img/${imageList[i]}`);
    displayedImage.setAttribute('alt', altText[imageList[i]]);
  });

  thumbBar.appendChild(newImage);
}


btn.addEventListener('click', () => {
  const isDark = btn.classList.contains('dark');
  if (isDark) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
