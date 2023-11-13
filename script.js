const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circlewidth = 2 * Math.PI * radius;
const input =document.querySelector('.percent');

input.addEventListener('change' , function() {
    progressSet(input.value);
})

circle.style.strokeDasharray = `${circlewidth} ${circlewidth}`;
circle.style.strokeDashoffset = circlewidth;

function progressSet(percent) {
    const offset = circlewidth - percent / 100 * percent;
    circle.style.strokeDashoffset = offset;
}


  
  
  
  
  
  
  
  
  