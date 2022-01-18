
'use strict';

//Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a value

//Function declaration
//function name(param1, param2){body... return;}
//one function === one thing
//naming : doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//2.Parameters
//premitive parameters: passed by value
//object parameters: passed by ref

function changeName(obj){
    obj.name = 'corder';
}

const bob = { name : 'jm'};
changeName(bob);
console.log(bob);

//3. Default parameters (added in ES6)
//사용자가 파라미터 값을 입력하지 않았을 떄 출력되는 기본값 설정
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('HI!')  // HI! by unknown

//4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i =0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
// 다음과 같이도 표기 가능

}
printAll('dream','coding','JM');

//5. Local scope
// 밖에서는 안이 보이지않고
// 안에서는 밖이 보인다.
let globalMessage = 'global' // global

function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        //message 는 상위 부모 변수기 때문에 접근가능
        let childMessage = 'hello2';
        // 해당 스코프 밖에서 해당 변수에 접근하려 하면 에러
    }
    // return type 이 없는 함수는 아래와같이
    // return undefined; 이 들어가 있는것
    // 생략가능
}
printMessage();


//6. Return a value
function sum(a,b){
    return a+b;
}

const result = sum(1,2) ; //3
console.log(result);


//7. Early return , early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if (user.point <= 10){
        return ;
    }

    //long upgrade logic...
}

// 현업팁!
// 위와같이 유저의 포인트가 10점이상일 경우 업그레이드 하는 로직이 실행된다 로 작성하기보단
// 아래와 같이 조건에 맞지 않으면 얼른 함수에서 나오고, 해당 조건에 해당하지 않으면 로직 실행
// 조건문 안에 로직을 써놓으면 가독성이 떨어진다는 이유.
// 아래와 같이 작성할 것.

//First-class function
//functions are treated like any other variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expression
//a function declareation can be called earlier than it is defiend. (hoisted)
//a function expression is created when the execution reaches it.

const print = function(){ // anonymous function
    console.log('print')
};

print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

// function expreesion 은 hoisted 불가능
// function declareation 은 hoisted 가능

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

//여기서 pintyes, printno 가 콜백함수

//anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
    //print(); 와 같이 자기 자신을 호출하는 것은 재귀함수
    // 피보나치 .. 등 필요할 때만 사용
};

randomQuiz('wrong', printYes , printNo);
randomQuiz('love you', printYes , printNo);



// Arrow function
// always ananymous
const simplePtint = function () {
    console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint !');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
//선언과 동시에 호출
//요즘엔 잘쓰이지 않지만 선언과 같이 호출하고 싶을 때 사용


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command,a,b) => {
    switch(command)
    {
        case 'add':
            console.log(a + b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
        case 'substract':
            console.log(a - b);
            break;
        default:
            console.log('no command');
            break;
    }
}

calculate('add',1,2);
calculate('divide',4,2);
calculate('multiply',6,2);
calculate('remainder',17,5);
calculate('substract',10,3);


















































