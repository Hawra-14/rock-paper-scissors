/*---------------------- Constants ----------------------*/


/*---------------------- Variables ----------------------*/
let userChoise = null // or '' stands for nothing

/*-------------- Cached Element References --------------*/
const choices = document.querySelector('#choices')
console.log(choices)

/*------------------- Event Listeners -------------------*/
choices.addEventListener('click', function(event){
    // console.log(event.target.id) // it targets the thing is clicked and display its id
    userChoise = event.target.id
    console.log('User Choise: ', userChoise)
})

/*---------------------- Functions ----------------------*/

