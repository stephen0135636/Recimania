const request = require('request')
const food = (item, callback)=>{
    const url = 'https://recimaniaapi.herokuapp.com/recipe?search='+ encodeURIComponent(item)

    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect! please try again later', undefined)
        }else if(response.body == 0){
            callback('Unable to find recipe! Please try another search',undefined)
        }
        else{
          callback(undefined, {
            search:  response.body.search,
            location:  response.body.location,
            summary:  response.body.summary,
            ingredient:  response.body.lngredients,
            procedure: response.body.procedure,
            img: response.body.image
            })
        }
    })
}

module.exports = food