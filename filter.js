// filter selects elements based on a condition and returns and array with the elements that fulfill the condition
const numbers = [12, 20, 1, 2, 3, 4, 5];
const players = [75, 65, 72, 55, 59];
// const  selected = players.filter(p => p >70);
// const  selected = players.filter(p => p >80);
// const  selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 3 === 1)
console.log(selected);


const friends = ['abbas', 'bablu', 'chin', 'dolal'];

const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);