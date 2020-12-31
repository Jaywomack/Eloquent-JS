// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const collection = document.getElementById('collection');

const submitButton = document
  .getElementById('submit-button')
  .addEventListener('click', (e) => {
    // Bootstrap card div
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        json.forEach((user) => {
          const card = document.createElement('div');
          card.classList = 'card my-5';
          card.style = 'width:18rem;';
          // ul that contains lis
          const ul = document.createElement('ul');
          ul.classList = 'list-group list-group-flush';
          // First li contains name
          const li1 = document.createElement('li');
          li1.classList = 'list-group-item 1';
          const customerName = document.createTextNode(`${user.name}`);
          li1.appendChild(customerName);
          // Second li contains username
          const li2 = document.createElement('li');
          li2.classList = 'list-group-item 2';
          const userName = document.createTextNode(`${user.username}`);
          li2.appendChild(userName);
          // third li contains user email
          const li3 = document.createElement('li');
          li3.classList = 'list-group-item 3';
          const userEmail = document.createTextNode(`${user.email}`);
          li3.appendChild(userEmail);
          card.appendChild(ul);
          ul.appendChild(li1);
          ul.appendChild(li2);
          ul.appendChild(li3);
          collection.appendChild(card);
        });
      });
  });
