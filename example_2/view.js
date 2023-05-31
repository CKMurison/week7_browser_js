class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  };

  addParagraph() {
    const addParagraph = document.createElement("p");
    addParagraph.innerText = "I really am scared of them";
    this.mainContainerEl.append(addParagraph);
  };
  
  clear() {
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach(parahraph => {
      parahraph.remove();
    }); 
  };
};

module.exports = View;