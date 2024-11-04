// console.log(Date.prototype, typeof Date.prototype);

// function fun() {

// };
// console.log(fun.prototype); //默认指向一个Object空对象





// console.log(Date.prototype.constructor === Date); // true

// console.log(fun.prototype.constructor === fun); //true


// fun.prototype.test = function () {
//     console.log('test()');
// };

// var fun = new fun()
// fun.test()

// console.log("///////////////////////////////////////////////////");

////////////////////////////////////////////////////////////////////////

class Pet {
    constructor(name, age) {
        console.log('In Pet constructor!');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, liveLeft = 9) {
        console.log('In Cat constructor!');
        super(name, age);
        this.liveLeft = liveLeft;
    }

    meow() {
        return 'Meowwww!!!';
    }
}

class Dog extends Pet {

    bark() {
        return 'Woof!!!';
    }

    eat() {
        return `${this.name} scarfs his food!`;
    }
}






