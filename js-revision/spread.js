//spread operator
const numberOne = [1,2,3];
const numberTwo = [4,5,6];

const combinedNum = [...numberOne, ...numberTwo];

console.log(combinedNum);

//spread operator with array destructuring
const numbers = [1,2,3,4,5];

const [one, two, ...rest] = numbers;

document.write('<p>' + one + '</p>');
document.write('<p>' + two + '</p>');

document.write('<p>' + rest + '</p>');

//spread operator with objects
const vehicleOne = {
    'type': 'Car',
    'brand': 'Ford',
    'color': 'Red'
}

const vehicleTwo = {
    'year': 2024,
    'color': 'Yellow',
    'city': 'Kolkata'
}

console.log({...vehicleOne, ...vehicleTwo});


