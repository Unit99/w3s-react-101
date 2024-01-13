//classes
class Car {
    constructor(color) {
        this.color = color;
    }

    present() {
        return 'My car is ' + this.color;
    }
}

class Brand extends Car {
    constructor(color, mod) {
        super(color);

        this.brand = mod;
    }

    show() {
        return 'I\'ve a ' + this.brand + ' of color ' + this.color.toLowerCase();
    }
}

const myCar = new Car('Orange');

console.log(myCar);

const carDesc = new Brand('Orange', 'Balleno');

//document.querySelector('.demo').innerHTML = myCar.present();

//document.querySelector('.demo').innerHTML = carDesc.show();

//arrays
const arr = [2, 3, 4, 5, 6];

function addNum(num) {
    return num + num;
}

let nums = arr.map(addNum);

console.log(nums);

//document.querySelector('.numbers').innerHTML = nums.toString();

document.write('<p>' + nums.toString() + '</p>');