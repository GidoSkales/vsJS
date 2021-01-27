"use strict"
// {} []

const cLick = document.querySelector("#click");
const rDiv = document.querySelector(".right-div");
const lDiv = document.querySelector(".left-div");
const neEl = () => {
    const cItem = document.createElement("main");
    cItem.className = "drops";
    const newItems = [lDiv.append(cItem)];
    const currLength = lDiv.childElementCount;
   newItems.forEach(newItem => {
   rDiv.innerHTML = `${currLength} Boxes`;
   });
}

const cBg = () => {
    const currLength = lDiv.childElementCount;
    if(currLength === 10) {
        rDiv.style.cssText = "background: red;";
    }
    if(currLength === 20) {
        rDiv.style.cssText = "background: blue;";
    }
}



cLick.addEventListener("click", function(){
    neEl();
    cBg();
});
// Append inputs to the nEl function
// Create a class

class nInputs {
    constructor(text1, text2, text3) {
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
    }
    addInputs(par1) {
        this.text1 = [...this.text1, par1];
    }
}