
'use strict';

//class (template, declare once, no data in)
// 틀만 정의해 놓기 ( 이런 클래스에는 이런이런 데이터만 들어올 수 있어 라고만 정의)
// 정의만 했기 떄문에 메모리에 올라가지 않음

//object(instance of a class, created many times, data in)
// 클래스를 이용해 실제로 데이터를 넣어 만드는 것
//실제로 데이터를 넣었기 때문에 메모리에 올라감

//Object-oriendted programming
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1.Class declarations
class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const mento = new Person('ellie',20);
console.log(mento.name);
console.log(mento.age);
mento.speak();

//2. Gatter and setters
class User {
    constructor(fristName,lastName,age){
        this.fristName = fristName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1  = new User('Steve','Job',-1);
console.log(user1.age);

//3. Fields ( public, private)
// Too soon!
// 가장 최근에 추가된 것(2020.04.27)

class Experiment{
    publicField = 2;
    #privateField =0;
}

const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); // undefined

//4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Cording';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }


    static printPublisher(){
        console.log(Article.publisher);
    }
}
// static 은 object에 할당되는 것이 아니라 클래스 자체에 할당

const article1= new Article(1);
const article2= new Article(2);
console.log(article1.publisher); // static 변수는 클래스 자체에 할당된 것이지 object에 할당되지 않기 때문에 undefined
//다음과 같이 사용 가능.
Article.printPublisher();
console.log(Article.publisher);

//5. Inheritance
// a way for one class to extend another class.

class shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height; 
    }
}

// extends 한 후 재정의가 필요하면 아래와 같이 재정의 하여 쓸 수 있다.
class Rectangle extends shape{}
class Triangle extends shape{
    draw(){
        super.draw();
        console.log('^^');
    }

    getArea(){
        return (this.width * this.height) / 2; 
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking : instanceOf

console.log(rectangle instanceof Rectangle);  //t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof shape); //t
console.log(triangle instanceof Object); //t

//JavaScript 에서 만든 모든 object , class 들은 자바스크립트에 있는 Object 를 상속한 것














































































