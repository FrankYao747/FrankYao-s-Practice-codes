// //This functions makes and returns an object every time it is called.
// // The resulting objects all follow the same "recipe"
// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const { r, g, b } = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	};
// 	return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35, 255, 150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); //"rgb(0, 0, 0)"
// black.hex(); //"#0000s00"

/////////////////////////////////////////////////////////////////

// function hex(r, g, b) {
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// function rgb(r, g, b) {
// 	return `rgb(${r},${g},${b})`;
// };


// document.querySelectorAll('h1')[0].style.backgroundColor = hex(255, 100, 25);


// document.querySelectorAll('h1')[1].style.backgroundColor = rgb(255, 100, 25);

// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function () {
// 		// console.log(`this: ${this}`);
// 		// console.log(this.r);
// 		const { r, g, b } = this;
// 		return `rgb(${r},${g},${b})`;
// 	};
// 	color.hex = function () {
// 		const { r, g, b } = this;
// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	};
// 	return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();


// document.querySelectorAll('h1')[1].style.backgroundColor = rgb(255, 100, 25);


// console.log(firstColor)

//////////////////////////////////////////////////////////////////////
// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// 	// console.log(this);
// };

// Color.prototype.rgb = function () {
// 	const { r, g, b } = this;
// 	return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// };
// Color.prototype.rgba = function (a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgb(${r},${g},${b},${a})`;
// };

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);

// color1.hex() // '#28323c'
// color2.hex() // '#000000'

// color1.hex() === color2.hex() // false

// color1.hex === color2.hex //true


/////////////////////////////////////////////////////////////////////////

// function test(a, b) {
// 	this.c = a + b;

// }

// new test(5, 6) // test {c: 11}


// function Fun(age, name) {
// 	this.age = age;
// 	this.name = name;

// 	//////////////
// 	// return 11111    //          no impact
// 	// return { a: 1 }       /// impact
// }

// console.log(new Fun(18));


////////////////////  Write a 'new' function  ///////////////////////////
// function create(fn, ...args) {
// 	// console.log(args); //[18, 'Peter']
// 	var obj = {};

// 	Object.setPrototypeOf(obj, fn.prototype);

// 	var result = fn.apply(obj, args);

// 	return result instanceof Object ? result : obj;

// }

// console.log(create(Fun, 18, 'Peter'));


///////////////////////////////////////////////////////////////////////////////////////

class Color {
	constructor(r, g, b, name) {
		// console.log('Inside Constructor!');
		// console.log(r, g, b);
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL();
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r},${g},${b}`;
	}
	rgb() {
		console.log(`RGB From ${this.name}!`);
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {

		console.log(`RGBA From ${this.name}!`);
		return `rgba(${this.innerRGB()},${a})`;
	}
	hex() {
		const { r, g, b, name } = this;
		console.log(`HEX From ${name}!`);
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%,${l}%)`;
	}

	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%,${l}%)`;
	}
	fullySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%,${l}%)`;
	}

	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const red = new Color(255, 67, 89, 'tomato');


// document.querySelectorAll('h1')[0].style.backgroundColor = c1.greet();
const white = new Color(255, 255, 255, 'white');

