let counterNumber = document.createElement('div');
counterNumber.setAttribute('class', 'counter-number');
counterNumber.innerHTML= 0;
document.querySelector('.counter').append(counterNumber);

let counterButtons = document.createElement('div');
counterButtons.setAttribute('class', 'counter-buttons');
document.querySelector('.counter').append(counterButtons);

let minus = document.createElement('button');
minus.setAttribute('class', 'decrease');
minus.innerHTML = '-';
document.querySelector('.counter-buttons').append(minus);

let zero = document.createElement('button');
zero.setAttribute('class', 'reset');
zero.innerHTML = 'RESET';
document.querySelector('.counter-buttons').append(zero);

let plus = document.createElement('button');
plus.setAttribute('class', 'increase');
plus.innerHTML = '+';
document.querySelector('.counter-buttons').append(plus);

let number = 0;