function decrease(){
  number -= 1;
  counterNumber.innerHTML= number 
}

function reset(){
  number = 0;
  counterNumber.innerHTML= number 
}

function increase(){
  number += 1;
  counterNumber.innerHTML= number 
}

minus.addEventListener("click", decrease)
zero.addEventListener("click", reset)
plus.addEventListener("click", increase)