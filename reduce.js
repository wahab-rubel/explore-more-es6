const numbers = [5, 6, 7, 8, 9, 15, 12];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);


// 1 you have an odd array (array with odd numbers). [1,3,5,7,9]. Now convert this array into an array even array (array with odd numbers). [1,3,5,7,9, 10]. Do this using for Loop & array.map().method. Hints: add none to any odd number and if will become and even number

// 2. you are given an array say: [33, 50, 79, 78, 90, 101, 30]. now return/ get all the elements which are divisible by 10 using array.filter(). method. Hints:

// Now do this same task fo question 2. but do this using array.find method. then compare the output of question 2 & question 3.


// 3. you have an array of objects: 
// const instructor [
// {name: 'nodi', age: 21, position: 'senior'}
// {name: 'akhi', age: 26, position: 'Junior'}
// {name: 'Shobuj', age: 30, position: 'senior'}
// ]

// your task is to display the instructor names that has the position senior using filter