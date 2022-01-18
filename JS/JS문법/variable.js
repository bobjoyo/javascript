

//1. Use strict
//added in ES 5
// use this for Valina Javascript.
'use strict';

//2. Variable,rw(read/write)
//let (added in ES6)

let globalName = 'global name';
{
    let name ='bob';
    console.log(name);
    name ='hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this !)
// var hoisting(move declaration from bottom to top)
// 어디에 선언 했냐에 상관없이 
// 항상 선언을 제일 위로 끌어 올려주는 것
// has no block scope
/* age = 4;
   var age;
   이게 가능. */


//3. Constant, r(only read)
//favor immutable data type always for a few reasons:
// - security (보안상)
// - thread safety (스레스가 동시에 값을 변경하지 못하게)
// - reduce human mistakes 

const daysInWeek = 7;
const maxNumber =5;

// js는 변수를 선언 할 때
// Mutable type 에 let (read, write)
// Immutable type 에 const (only read)

//4.Variable type

//primitive, single item: number, string, boolean, null, undefiedn,symbol
//더이상 작게 나눠질 수 없는 한가지의 아이템

//object, box container
//싱글아이템들을 여러개 묶어서 한 단위, 박스로 관리

//function, first-class function
//js 는 function 도 data type 중 하나
//어떤 언어든 first-class function 이 지원이 된다는 얘기는
//function 도 변수에 할당가능
//함수에 파라미터로 전달가능, 리턴타입으로도 function 리턴가능

// number - speicla numeric values:
// infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2 ;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn);//NaN


//string
const char = 'c';
const brendan ='brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(char);
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob} , type : ${typeof helloBob}`);


//boolean
//false: 0 , null, undefined, ''
//ture : any other, value
const canRead = true;
const test = 3 < 1; //false

console.log(`value : ${canRead} , type: ${typeof canRead}`);
console.log(`value : ${test} , type : ${typeof test}`);

// null
let noting = null;
console.log(`value : ${noting}, type : ${typeof noting}`);

// undefined
let x = undefined; // let x; 와같음
console.log(`value : ${x} , type : ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
// 주어진 스트링(현재는 id)에 맞는 심볼을 만들어줘
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 고유한 식별자, 우선순위를 주고싶을때 사용
// 같은 식별자를 만들고 싶을때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// 출력은 description 이용해서 string 으로 변환해서 출력
console.log(`value : ${gSymbol1.description} , type : ${typeof gSymbol1}`);

//5. Dynamic typing : dynamically typed language
//javascript는 선언할때 어떤 타입인지 선언하지않고
//런타임(프로그램이 동작할때) 할 때 할당된 값에 따라 타입이 변경될 수 있다.

let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
// 현재는 text 는 누간가 number Type 으로 바꿔놓기 때문에
// js는 런타임때 타입을 결정하기 때문에
//console.log(text.charAt(0)); 
// 위와같은 코드는 이제 에러가 남.

// 위와 같은 일로 하도 뒷통수를 많이 맞아서
// TypeScript가 등장 !!!!
// javascript 위에 type이 올려진 언어

//object , real -life object, data structure
const jm = {name: 'jm' , age: 20};
// 다른 오브젝트로 변경불가.
jm.age = 21;
// 위와 같이 오브젝트 내 변수는 변경가능
