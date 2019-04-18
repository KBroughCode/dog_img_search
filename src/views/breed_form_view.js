const PubSub = require('../helpers/pub_sub.js');

class BreedFormView {

  constructor() {
    this.element = document.querySelector('#breed-form');
  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const breed = evt.target['breed-input'].value;
      console.log(evt);
      PubSub.publish('BreedFormView:form-submitted', breed);
      this.element.reset();
    });
  }

}

module.exports = BreedFormView;
