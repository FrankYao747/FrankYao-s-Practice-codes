console.log(Date.prototype, typeof Date.prototype);

function fun() {

};
console.log(fun.prototype); //默认指向一个Object空对象





console.log(Date.prototype.constructor === Date); // true

console.log(fun.prototype.constructor === fun); //true


fun.prototype.test = function () {
    console.log('test()');
};

var fun = new fun()
fun.test()

console.log("///////////////////////////////////////////////////");











