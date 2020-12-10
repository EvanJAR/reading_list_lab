document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const coolForm = document.querySelector('#new-item-form');
  coolForm.addEventListener('submit', handleFormSubmit);

  const deleteStuff = document.querySelector("#delete");
  deleteStuff.addEventListener('click', handleDeleteAllThings);
});


const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const newListItem = document.createElement('li');
  newListItem.textContent = `${title}, ${author}, ${category}`;
    
  const list = document.querySelector('ul');
  list.appendChild(newListItem);

  document.getElementById("new-item-form").reset();
  
}

// const handleDeleteAllThings = function (event) {
//   const listItem = document.querySelector('li');
//   listItem.remove();
// }

const handleDeleteAllThings = function (event) {
  const list = document.querySelector('ul');
  list.innerHTML = '';
}