const PubSub = require('../helpers/pub_sub.js');

class DogView {

  constructor() {
    this.container = document.querySelector('#dog-container');
  }

  bindEvents() {
    PubSub.subscribe('Dogs:dog-data-loaded', (evt) => {
      const dogs = evt.detail;
      this.render(dogs);
    });
  }

  render(dogs) {
    this.clearDogs();
    console.log(dogs);
    dogs.message.forEach((dog) => {
      const img = this.createImage(dog);
      this.container.appendChild(img);
    });
  }

  clearDogs() {
    this.container.innerHTML = '';
  }

  createImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    return img;
  }

}

module.exports = DogView;
