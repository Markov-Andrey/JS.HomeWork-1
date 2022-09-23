//Задание 2
console.log('ЗАДАНИЕ 2');
let a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;
a0 = '  ';
a1 = 5 % 3;
console.log(a0 + 'a1) ' + '5 % 3 = ' + a1);
a2 = 3 % 5;
console.log(a0 + 'a2) ' + '5 % 3 = ' + a2);
a3 = 5 + '3';
console.log(a0 + 'a3) ' + "5 + '3' = " + a3);
a4 = '5' + 3;
console.log(a0 + 'a4) ' + "'5' + 3 = " + a4);
a5 = 75 + 'кг';
console.log(a0 + 'a5) ' + "75 + 'кг' = " + a5);
a6 = 785 * 653;
console.log(a0 + 'a6) ' + '785 * 653 = ' + a6);
a7 = 100 / 25;
console.log(a0 + 'a7) ' + '100 / 25 = ' + a7);
a8 = 0 * 0;
console.log(a0 + 'a8) ' + '0 * 0 = ' + a8);
a9 = 0 / 2;
console.log(a0 + 'a9) ' + '0 / 2 = ' + a9);
a10 = 89 / 0;
console.log(a0 + 'a10) ' + '89 / 0 = ' + a10);
a11 = 98 + 2;
console.log(a0 + 'a11) ' + '98 + 2 = ' + a11);
a12 = 5 - 98;
console.log(a0 + 'a12) ' + '5 - 98 = ' + a12);
a13 = (8 + 56 * 4) / 5;
console.log(a0 + 'a13) ' + '(8 + 56 * 4) / 5 = ' + a13);
a14 = (9 - 12) * 7 / (5 + 2);
console.log(a0 + 'a14) ' + '(9 - 12) * 7 / (5 + 2) = ' + a14);
a15 = +"123";
console.log(a0 + 'a15) ' + '+"123" = ' + a15);
a16 = 1 || 0;
console.log(a0 + 'a16) ' + '1 || 0 = ' + a16);
a17 = false || true;
console.log(a0 + 'a17) ' + 'false || true = ' + a17);
a18 = true > 0;
console.log(a0 + 'a18) ' + 'true > 0 = ' + a18);
//Задание 3
console.log('ЗАДАНИЕ 3');
let width, height, SPryam;
width = 10;
height = 23;
SPryam = width * height;
console.log(a0 + 'При высоте прямоугольника ' 
+ height + 'см и ширине ' + width 
+ 'см, площадь прямоугольника = ' + SPryam + 'кв.см');
//Задание 4
console.log('ЗАДАНИЕ 4');
let VCilindra;
VCilindra = Math.PI * Math.pow((a7/2), 2) * 10;
console.log(a0 + 'При высоте цилиндра = 10м и диаметре ' + a7 
+ 'м, объем цилиндра ' + VCilindra.toFixed(2) + 'куб.м');
//Задание 5
console.log('ЗАДАНИЕ 5');
let SKruga = Math.PI * Math.pow(5, 2);
console.log(a0 + 'При радиусе круга 5см площадь = ' + SKruga.toFixed(2) + 'кв.см');
//Задание 6
console.log('ЗАДАНИЕ 6');
let ATrap, BTrap, HTrap, STrap;
ATrap = 5;
BTrap = 7;
HTrap = 10;
STrap = (ATrap+BTrap)/2 * HTrap;
console.log(a0 + 'При радиусе круга 5см площадь = ' + STrap + 'кв.см');
//Задание 7
console.log('ЗАДАНИЕ 7');
let S = 2000000;
let p = 10 / 1200;
let n = 60;
let Pereplata = ((S * p / (1 - Math.pow(1 + p, -n)))*n)-S;
console.log(a0 + 'При кредите на 5 лет размером ' + S + 'руб. и 10%-ставке переплата составляет ' 
+ Pereplata.toFixed(2) + ' руб.');
//Задание 8
console.log('ЗАДАНИЕ 8');
a = 8;
b = 3;
// a+2(x-b)=16
// b(x+15)=a+6x
// x+2x+ax+bx=23780
let x1 = (16-a+2*b)/2;
console.log('x1 = ' + x1 + '\n');

let x2 = (a-15*b) / (b - 6);
console.log('x2 = ' + x2 + '\n');

let x3 = 23780 / (3 + a + b);
console.log('x3 = ' + x3 + '\n');