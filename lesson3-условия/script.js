const answer = prompt('Сколько вам лет?', '');
//УСЛОВИЯ 
if (answer >= 18) {
    console.log('Добро пожаловать');
} else if (answer <= 17) {
    console.log('Досутп закрыт');
} else {
    console.log('Ты ввёл неверное значение');
}


