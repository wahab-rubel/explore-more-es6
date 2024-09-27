/**
 * 1. var let const 
 * 2. define parameter
 * 3. template string
 * 4. arrow function
 * 5. distractions and opratoption
 * 6. object.keys, object.values, object.entries,
 * 7. for of used in array and string,
 * 8. for in loop used in object 
 * 
 */

const a = 65;
const numbers = [56, 7, 8]
const persone = {
  name: 'wahab khan',
}

const massage = `Hi, ${persone.name} has a ${a} access to ${numbers [2]}`

if (true){

}

const square = x => x * x;
const sum = (a, b) => a + b;

const {age, z, ...others} = {x: 2, y: 3, z: 4, name: "wahab khanna", age: 55}


const [] = ['ram', 'vam', 'gam', 'pam']