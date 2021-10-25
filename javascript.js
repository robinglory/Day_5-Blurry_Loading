var documentText = document.querySelector('.loading-text');
var bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurry, 40);


function blurry(){
   load++;
   if(load>99){
      clearInterval(int);
   }
   documentText.innerHTML = `${load}%`;

   documentText.style.opacity = scale(load, 0, 100, 1, 0 );

   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

   function scale (number, inMin, inMax, outMin, outMax) {
      return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
}