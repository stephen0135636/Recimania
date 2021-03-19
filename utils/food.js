const request = require('request')
const food = (item, callback)=>{
    const url = 'https://api.spoonacular.com/recipes/complexSearch?query='+encodeURIComponent(item)+ '&number=3&addRecipeInformation=true&&apiKey=89c2235a44c942acb51b05bdd1221af9'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect! please try again later', undefined)
        }else if(response.body == 0){
            callback('Unable to find recipe! Please try another search',undefined)
        }
        else{
          callback(undefined, {
            foodrecipe00:  response.body.results[0].summary + " view Image " + response.body.results[0].image,
            foodrecipe01:  response.body.results[1].summary + " view Image " + response.body.results[1].image,
            foodrecipe02:  response.body.results[2].summary + " view Image " + response.body.results[2].image,
            })
        }
    })
}

module.exports = food