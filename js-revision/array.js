//array destructuring

const wheels = ['Ford', 'F-150', 'expedition'];

const [car, , suv] = wheels;

console.log(wheels);

document.write('<p>' + car + '</p>');
document.write('<p>' + suv + '</p>');

function calculate(a,b){
    const add = a + b;

    const subtract = a - b;

    const multi = a * b;

    const divide = a / b;

    return [add,subtract,multi,divide];
}

const [add,subtract,multi,divide] = calculate(5,4);

console.log([add,subtract,multi,divide]);

document.write('<p>Sum: ' + add + '</p>');
document.write('<p>Subtract: ' + subtract + '</p>');
document.write('<p>Multiply: ' + multi + '</p>');
document.write('<p>Division: ' + divide + '</p>');

//object destructuring with nested objects
const vehicle = {
    'brand': 'Ford',
    'year': '2009',
    'color': 'Orange',
    'type': 'Car',
    'registration': {
        'city': 'Kolkata',
        'state': 'West Bengal',
        'country': 'India'
    }
}

function myVehicle({type, color, brand, registration: {city}}){
    return(
        'I\'ve a ' + type + ' from the ' + brand + ' of ' + color + ' color and' + ' with a registration from the city of ' + city
    )
}

console.log(myVehicle(vehicle));

document.write(myVehicle(vehicle));