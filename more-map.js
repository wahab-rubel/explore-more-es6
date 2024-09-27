const numbers = [12, 10, 8, 15, 20, 30, 40, 50];

const doubled = numbers.map(num => num * 2)
console.log(doubled);

const fiveBonus = numbers.map(num => num + 8);
console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['abbas', 'bablu', 'chin', 'dolal']
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

const firstLetter = friends.map(friends => friends[0]);
console.log(firstLetter);