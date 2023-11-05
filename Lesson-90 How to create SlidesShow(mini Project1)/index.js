const slideshowElements = document.querySelectorAll(".slideshow-element");
console.log(slideshowElements);

let count = 0;

setInterval(()=>{
    count++;
  let currentElement = document.querySelector('.current');
  currentElement.classList.remove('current');

  if(count >= slideshowElements.length){
         count = 0;
         slideshowElements[0].classList.add('current');
  }
  else currentElement.nextElementSibling.classList.add('current');
  
},2000)