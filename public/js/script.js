const recipeForm = document.querySelector("form")
const search = document.querySelector("input")
const buttton = document.querySelector("#btn")
const messageOne = document.querySelector("#message_1")
//SEARCH
const messageTwo = document.querySelector("#message_2")

//LOCATION
const location_name = document.querySelector("#location")
const location_result = document.querySelector("#location_result")

//SUMMARY
const summary = document.querySelector("#summary")
const summary_result = document.querySelector("#summary_result")

//INGREDIENTS
const ingredients = document.querySelector("#ingredients")
const ingredients_result0 = document.querySelector("#ingredients_result0")
const ingredients_result1 = document.querySelector("#ingredients_result1")
const ingredients_result2 = document.querySelector("#ingredients_result2")
const ingredients_result3 = document.querySelector("#ingredients_result3")
const ingredients_result4 = document.querySelector("#ingredients_result4")
const ingredients_result5 = document.querySelector("#ingredients_result5")
const ingredients_result6 = document.querySelector("#ingredients_result6")
const ingredients_result7 = document.querySelector("#ingredients_result7")
const ingredients_result8 = document.querySelector("#ingredients_result8")
const ingredients_result9 = document.querySelector("#ingredients_result9")
const ingredients_result10 = document.querySelector("#ingredients_result10")
const ingredients_result11 = document.querySelector("#ingredients_result11")

//PROCEDURE
const procedure = document.querySelector("#procedure")
const procedure_result0 = document.querySelector("#procedure_result0")
const procedure_result1 = document.querySelector("#procedure_result1")
const procedure_result2 = document.querySelector("#procedure_result2")
const procedure_result3 = document.querySelector("#procedure_result3")
const procedure_result4 = document.querySelector("#procedure_result4")
const procedure_result5 = document.querySelector("#procedure_result5")
const procedure_result6 = document.querySelector("#procedure_result6")
const procedure_result7 = document.querySelector("#procedure_result7")
const procedure_result8 = document.querySelector("#procedure_result8")
const procedure_result9 = document.querySelector("#procedure_result9")
const procedure_result10 = document.querySelector("#procedure_result10")
const procedure_result11 = document.querySelector("#procedure_result11")

//IMAGE
const img = document.querySelector("#imageLink")

//VIDEO
const video = document.querySelector("#videoLink")


//ALL RESULTS
const loader = document.querySelector('#all_results')



recipeForm.addEventListener('submit', (e) =>{
  e.preventDefault()

  const myrecipe = search.value

  loader.classList.add('loader')
  messageTwo.textContent = ' '

  fetch('/result?search=' + myrecipe).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        loader.classList.remove('loader')
        messageOne.textContent = data.error
      } else {
        loader.classList.remove('loader')
        messageOne.textContent = "Search results for "+data.search
        messageTwo.textContent = data.body.search

        img.src = data.body.img
        img.textContent = "click here to view image"

        location_name.textContent = "Location"
        location_result.textContent = data.body.location

        summary.textContent = "Summary"
        summary_result.textContent = data.body.summary

        ingredients.textContent = "ingredients"
        ingredients_result0.textContent = data.body.ingredient[0]
        ingredients_result1.textContent = data.body.ingredient[1]
        ingredients_result2.textContent = data.body.ingredient[2]
        ingredients_result3.textContent = data.body.ingredient[3]
        ingredients_result4.textContent = data.body.ingredient[4]
        ingredients_result5.textContent = data.body.ingredient[5]
        ingredients_result6.textContent = data.body.ingredient[6]
        ingredients_result7.textContent = data.body.ingredient[7]
        ingredients_result8.textContent = data.body.ingredient[8]
        ingredients_result9.textContent = data.body.ingredient[9]
        ingredients_result10.textContent = data.body.ingredient[10]
        ingredients_result11.textContent = data.body.ingredient[11]


        procedure.textContent = "procedure"
        procedure_result0.textContent = data.body.procedure[0]
        procedure_result1.textContent = data.body.procedure[1]
        procedure_result2.textContent = data.body.procedure[2]
        procedure_result3.textContent = data.body.procedure[3]
        procedure_result4.textContent = data.body.procedure[4]
        procedure_result5.textContent = data.body.procedure[5]
        procedure_result6.textContent = data.body.procedure[6]
        procedure_result7.textContent = data.body.procedure[6]
        procedure_result8.textContent = data.body.procedure[7]
        procedure_result9.textContent = data.body.procedure[8]
        procedure_result10.textContent = data.body.procedure[9]
        procedure_result10.textContent = data.body.procedure[10]
        procedure_result10.textContent = data.body.procedure[11]

        
        video.href = data.body.video
        video.textContent = "click to view video"
      }
    })
  })

})
















