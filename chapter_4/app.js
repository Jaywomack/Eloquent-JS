const breedInput = document.getElementById('dog-selector');
const numberInput = document.getElementById('number-of-pictures');

const collection = document.querySelector('.collection');

const form = document.querySelector('#form').addEventListener('submit', (e) => {
  fetch(`https://dog.ceo/api/breed/${breedInput.value}/images/random`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      const img = document.createElement('img');
      img.src = `${json.message}`;
      img.classlist = 'w-5 h-5 border border-dark';
      collection.appendChild(img);
    });
  e.preventDefault();
});
