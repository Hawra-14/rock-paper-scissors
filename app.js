/*---------------------- Constants ----------------------*/


/*---------------------- Variables ----------------------*/
let userChoise = null // or '' stands for nothing

/*-------------- Cached Element References --------------*/
const choices = document.querySelector('#choices')
// console.log(choices)
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')


/*------------------- Event Listeners -------------------*/
choices.addEventListener('click', function (event) {
    // console.log(event.target.id) // it targets the thing is clicked and display its id
    userChoise = event.target.id

    // we want to hide buttons are not userchoise
    if (userChoise === 'rock') {
        // console.log('userChose rock')
        // add hidden class to paper and scissors
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
    }
    else if (userChoise === 'paper') {
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
    }
    else {
        rock.classList.add('hidden')
        paper.classList.add('hidden')
    }

    console.log('User Choise: ', userChoise)
})

reset.addEventListener('click', function () {
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
})

/*---------------------- Functions ----------------------*/

