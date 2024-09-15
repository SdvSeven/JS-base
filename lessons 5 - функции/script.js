//Фунции.

function sayHello() {
    console.log('Привет');
}
sayHello();


function calc(a, b) {
    console.log(a+b);
}
calc(8, 2 );


function lol() { 
    console.log('Hello');
}
lol();


function kek(c, d) {
    console.log(c+d)
}
kek(9,34)


//Return, если мы значение функции хотим поместить в какую-либо переменную

function cool(c, d) {
    return (c+d);
}
cool (8,8 );
let sum= cool(8, 8);
console.log(sum);

//Локальные и Глобальные переменные 

// Глобальная ниже 

let number = 4; //number во всем коде 

function aboba (m, mm) {
    return (m+mm-number);
}
aboba(100, 23 );
let mum = aboba( 100, 23)

console.log(mum)

//ФУНКЦИЯ-КОНСТАНТА

const mem = function() {
    console.log('ПРивет')
};
mem(); //mem можно вывести ТОЛЬКО после объявления

//СТРЕЛОЧНЫЕ ФУНКЦИИ



