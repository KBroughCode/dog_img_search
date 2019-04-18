const Dogs = require('./models/dogs.js');
const DogView = require('./views/dog_view.js');
const BreedFormView = require('./views/breed_form_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const dogs = new Dogs();
  dogs.bindEvents();

  const dogView = new DogView();
  dogView.bindEvents();

  const breedFormView = new BreedFormView();
  breedFormView.bindEvents();


});
