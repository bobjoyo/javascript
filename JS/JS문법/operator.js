
'use strict';

//1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1+2}`);

//2.Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); //substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); //exponentiation 제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement} , counter : ${counter}`);
//postIncrement = counter;
// counter = counter + 1;

//--preDecrement , postDecrement-- 도 동일 원리


//4. Assigment operators
let x = 3;
let y = 6;

x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

//5. Comperison operators
console.log(10<6); //less than
console.log(10 <= 6) //less than or equal
console.log(10 > 6) //greater than
console.log(10 >= 6 ) //greater than or equal


//6. Logical operators: || (or) , &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);
// T || F || T  -> T  (하나라도 T 면 T)
// 팁: 간단한 value 들을 앞으로 써주는 것이 좋음
// 함수 같은 것은 마지못해 실행 되어야 할 때만 실행되는 것이 좋음 

function check(){
    for ( let i = 0 ; i< 10 ; i++){
        //wasting time
        console.log('');
    }
    return true;
}

//여기서 포인트는 or 연산자는 처음에 T면 멈춤.
// value1 이 T 였으면 뒤에 value2 도 체크안하고
// check() 함수도 실행시키지 않음.

// && (and)
console.log(`and : ${value1 && value2 && check()}`);
// 전부 T여야 T
// 마찬가지로 F를 만나면 멈춤
// value1 이 F 였으면 뒤에 value2 도 체크안하고
// check() 함수도 실행시키지 않음.

// ! (not)
console.log (!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality , with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 코딩할 때 왠만하면 === 로 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const bob1 = {name : 'jm'};
const bob2 = {name : 'jjm'};
const bob3 = bob1;

console.log(bob1 == bob2); //f
console.log(bob1 === bob2);//f
console.log(bob1 === bob3);//t
console.log(bob1 == bob3);//t

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); // f
console.log(''== false); // t
console.log('' === false); // f
console.log(null == undefined); //t
console.log(null === undefined); // f
// null 과 undefined 은 같다고 간주되지만
// null 과 undefined 은 다른 타입


// == 는 타입 상관없이 값이 같으면 T
// === 는 타입 ,값 모두 같으면 T


//8. Conditional operators: if
// if, else if , else
const fristname = 'coder' ; 
if( fristname === 'bob'){
    console.log('Welcome, JM!');
}else if(fristname === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwnon');
}

//9. Ternary operator: ?
// condition ? value1 : value2;
console.log(fristname === 'coder' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    // 아래와 같이 사용 가능 
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy
//body code is executed.

let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`)
    i--;
}while (i>0);

//for loop , for(begin; condition ; step)
for(i =3; i>0; i--){
    console.log(`for : ${i}`);
}



for(let i =3; i>0; i = i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0 ; i < 10; i ++){
    for(let j =0; j< 10; j++){
        console.log(`i:${i},j:${j}`);
    }
}

//break, continue
//break: 바로 loop 를 끝냄
// continue: 이번 한번만 넘기고 다음 스텝으로 넘김
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let num=0; num<=10; num++){
    if(num%2 === 0){
        console.log(num);
    }else{
        continue;
    }
}



//Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)

for(let a=0; a<=10; a++){
    if(a===8){
        break;
    }else{
        console.log(a);
    }
    
}




























