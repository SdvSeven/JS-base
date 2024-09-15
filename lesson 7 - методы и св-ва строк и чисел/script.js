console.log('Методы и свойства строк и чисел')

//УЗНАТЬ КОЛ-ВО СИМВОЛОВ В СТРОКЕ 
const str1 = 'testing';
console.log(str1.length);

const str2 = 'test';
console.log(str2[0]);

//Как поменять регистр текста 
const str3 = 'testik';
console.log(str3.toUpperCase()); //текст написан капсом

const str4 = 'testik';
console.log(str4.toLowerCase()); //текст написан маленьким (чтобы пользователь нечаяно не писал при вкл. капсом)

//Как понять, есть ли текст в строке 
const str5 = 'hello world';
console.log(str5.indexOf('world'));

const str6 = 'hello';
console.log(str6.indexOf('world'));

//Как вырезать кусочек текста из строки 
const str7 = 'hello world';
console.log(str7.slice(6,10)); //что бы справа налево ставим к значению "-"