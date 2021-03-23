//HTTP BROWSER FETCH METHOD




// /* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//       this.classList.toggle("active");
//       this.nextElementSibling.classList.toggle("show");
//     }
// }

// //SLIDESHOW
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 3000);    
// }



// const recipeForm = document.querySelector("#search_form")
// const search = document.querySelector("#search_bar")
// const buttton = document.querySelector("#btn")
// const messageOne = document.querySelector("#message_1")
// const messageTwo = document.querySelector("#message_2")
// // const search_result = document.querySelector("#search_result")

// recipeForm.addEventListener('submit', (e) =>{
//   e.preventDefault()

//   const recipe = search.value

//   messageOne.textContent = "Loading..."
//   messageTwo.textContent = ''

//   fetch('/result?search=' + recipe).then((response) => {
//     response.json().then((data) => {
//       if (data.error) {
//         messageOne.textContent = data.error
//         messageOne.style.margin = "10px"
//       } else {
//         messageOne.textContent = data.search
//         messageOne.style.margin = "10px 10px 0 10px"
//         messageTwo.style.margin = "10px 10px 0 10px"
//         messageTwo.style.textAlign = "justify"
//         messageTwo.textContent = data.body.foodrecipe00
//       }
//     })
//   })

// })

/*SUBMIT FORM*/

$('form').on('submit', (e)=>{
  e.preventDefault();

  const fullname = document.querySelector('#fullname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const text = document.querySelector('#text').value.trim();

  const data = {
    fullname,
    email,
    subject,
    text
  }

  $.post('/email', data, function(){
    console.log('server recieved our data')
  })
  
})









