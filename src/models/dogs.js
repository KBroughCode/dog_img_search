const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

class Dogs {

  constructor() {
    this.data = [];
  }

bindEvents(){
  PubSub.subscribe('BreedFormView:form-submitted', (event) => {
    const inputtedText = event.detail;
    this.getData(inputtedText);
  });
}

getData(selectBreed){
const url = `https://dog.ceo/api/breed/${selectBreed}/images`
const requestHelper = new RequestHelper(url);
requestHelper.get().then((data) =>{
  this.data = data;
  PubSub.publish('Dogs:dog-data-loaded', data);
})
}

};

module.exports = Dogs;
