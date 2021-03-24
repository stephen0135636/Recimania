const recipeForm = document.querySelector("form")
const search = document.querySelector("input")
const buttton = document.querySelector("#btn")
const messageOne = document.querySelector("#message_1")
//SEARCH
const messageTwo = document.querySelector("#message_2")

//LOCATION
const location = document.querySelector("#location")
const location_result = document.querySelector("#location_result")

//SUMMARY
const summary = document.querySelector("#summary")
const summary_result = document.querySelector("#summary_result")

//INGREDIENTS
const ingredients = document.querySelector("#ingredients")
const ingredients_result = document.querySelector("#ingredients_result")

//PROCEDURE
const procedure = document.querySelector("#procedure")
const procedure_result = document.querySelector("#procedure_result")

//IMAGE
const image = document.querySelector("#image")

recipeForm.addEventListener('submit', (e) =>{
  e.preventDefault()

  const myrecipe = search.value

  messageOne.textContent = 'loading...'
  messageTwo.textContent = ' '

  fetch('http://localhost:3000/result?search=' + myrecipe).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = "Search results for "+data.search
        messageTwo.textContent = data.body.search

        location.textContent = "Location"
        location_result.textContent = data.body.location

        summary.textContent = "Summary"
        summary_result.textContent = data.body.summary

        ingredients.textContent = "ingredients"
        ingredients_result.textContent = data.body.ingredient

        procedure.textContent = "procedure"
        procedure_result.textContent = data.body.procedure

        image.textContent = data.body.img
      }
    })
  })

})
















