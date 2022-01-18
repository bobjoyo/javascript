
'user strict';

//Objects
//one of the JavaScript`s data types.
//a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };  오브젝트는 키와 벨류의 집합체

//1. Literals and properties
//Object 만드는법
const obj1 = {};  //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax


function print(person){
    console.log(person.name);
    console.log(person.age);
}

const bob = { name: 'jm' , age: 4};
print(bob);


// 아래와 같이 object에 나중에 추가, 삭제 가능하지만 유지보수 힘들어지기 때문에 피하기. 가능하단 것만 알기 
bob.hasJob = true;
console.log(bob.hasJob);  //true

delete bob.hasJob;
console.log(bob.hasJob);

//2. Computed properties
console.log(bob.name);
//위와 같이 .으로 가능하지만
//아래와 같이 배열 형태로 가능
//이때 key 는 항상 string type 으로
//ex) bob[name] (x) , bob['name'] (o)
console.log(bob['name']);
bob['hasJob'] = true ;  // Computed properties 또한 오브젝트에 추가 가능.
console.log(bob.hasJob);

// . 또는 [] 는 언제 뭘쓰고 언제 뭘쓰나?
// 동적으로 key 의 value 를 받아와야 할 때 유용하게 쓰임.
// 그냥 코딩할땐 . 으로 코딩하면 됨.
// 예시)
function printValue(obj,key){
    console.log(obj.key);
} //다음과 같을 때 해당 obj 에 key라는 property가 없기 때문에 
// 아래 두개는 undefined
printValue(bob,'name');
printValue(bob, 'age');

function printValue2(obj,key){
    console.log(obj[key]);
} //다음과 같이 써줘야 전달받은 key 값의 value 를 출력 가능.
printValue2(bob,'name');
printValue2(bob, 'age');

//3. Property value shorthand
const person1 = {name : 'aa', age:2 };
const person2 = {name : 'bb', age:3 };
const person3 = {name : 'cc', age:4 };
//매번 오브젝트 만들때마다 타이핑 하기 번거로움

//4. Constructor function
function Person(name,age){
    // this = {}
    this.name = name ;
    this.age = age ;
    // return this;
}

const person4 = new Person('dd',5);
console.log(person4);

//다음과 같이 만들 수 있음.

//5. in operator: property existance check (key in obj)
// in이라는 키워드로 해당하는 property가 object 안에 있는지 확인 가능

console.log('name' in bob); //t
console.log('age' in bob); //t
console.log('random' in bob); //f

//6. for...in vs for..of
// for (key in obj)

for(key in bob){
    console.log(key);
    //object 안에있는 모든 property 출력
}

//for (value of iterable)
const array = [1,2,4,5];
for ( let i = 0 ; i< array.length ; i++)
{
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}


//7. Fun cloning
//Object.assign(dest,[obj1, obj2, obj3...])
const user = new Person('bobjo',29);
const user2 = user ;
console.log(user);
console.log(user2);

user2.name = 'okok';
console.log(user);
console.log(user2);

// old way
const user3 = {} //빈 object 생성
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4={}
Object.assign(user4,user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size: 'big'};
const mixed = Object.assign({},fruit1,fruit2);
const mixed2 = Object.assign({},fruit2,fruit1);

console.log(mixed.color); // blue
console.log(mixed.size); //big

console.log(mixed2.color); // red
console.log(mixed2.size); // big

// Object.assign 은 가장 오른쪽에 있는 object 가 왼쪽 오브젝트를 모두 덮어씀













































































