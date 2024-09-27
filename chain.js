// data access
const data = [{id: 1, name: 'kabul', address: '123 usa', city: 'chittagong'}]
console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    {id: 1, name:'lenovo laptops', price: 650000,},
    {id: 2, name:'macbook', price: 50000,}
  ]
}
console.log(products.data[1].price);

const user = {
  di: 5001,
  name: 'wahab rubel',
  address: {
    street: {
      first: '64/1 uttor side',
      second: 'poring er gobi',
      third: 'po dorai',
    },
    city: 'Dhaka',
  }
}

const  user2 = {
  id: 5001,
  name: 'pori biib major',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  }
}
console.log(user2.address.street?.second);
console.log(user.address.street.second);