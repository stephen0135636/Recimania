const request = require('request')
const foodrecipe = require('./utils/food')

// const search = process.argv[2]

if(!search){ 
  console.log('please provide an address')
}else{
  foodrecipe('Bread', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
}

