const products = [
  {id: 1, name: 'lenovo', price: 22000},
  {id: 2, name: 'iphone', price: 52000},
  {id: 3, name: 'saumi', price: 25000},
  {id: 4, name: 'vivo', price: 18000},
  {id: 5, name: 'oppo', price: 35000},
]
// map
const names = products.map(products => products.name);
// console.log(names);
// filter
const price = products.filter(p => p.price > 15000);
// console.log(price);
// forEach
//  products.forEach(p => console.log(p.id));

 // filter
 const expensive = products.filter(p => p.price > 22000);
//  console.log(expensive);

 // find
 const adorable = products.find(p => p.price > 35000);
 console.log(adorable);

 const total = products.reduce((accu, current) => accu + current.price, 0)
 console.log(total);


 