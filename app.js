/*---------------------- Constants ----------------------*/
const choicesArr = ['rock', 'paper', 'scissors']

/*---------------------- Variables ----------------------*/
let userChoise = null // or '' stands for nothing
let computerChoise = ''
let winner = ''

/*-------------- Cached Element References --------------*/
const choices = document.querySelector('#choices')
// console.log(choices)
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')

const resultDisplay = document.querySelector('#result-display')
console.log(resultDisplay)

/*------------------- Event Listeners -------------------*/
choices.addEventListener('click', function (event) {
    // console.log(event.target.id) // it targets the thing is clicked and display its id
    userChoise = event.target.id

    // we want to hide buttons are not userchoise
    if (userChoise === 'rock') {
        // console.log('userChose rock')
        // add hidden class to paper and scissors
        // paper.classList.add('hidden')
        // scissors.classList.add('hidden')

        // paper.setAttribute('disabled', 'disabled')
        // scissors.setAttribute('disabled', 'disabled')
        paper.disabled = true
        scissors.disabled = true
    }
    else if (userChoise === 'paper') {
        // rock.classList.add('hidden')
        // scissors.classList.add('hidden')

        // rock.setAttribute('disabled', 'disabled')
        // scissors.setAttribute('disabled', 'disabled')

        rock.disabled = true
        scissors.disabled = true
    }
    else {
        // rock.classList.add('hidden')
        // paper.classList.add('hidden')

        // paper.setAttribute('disabled', 'disabled')
        // rock.setAttribute('disabled', 'disabled')

        paper.disabled = true
        rock.disabled = true
    }

    // computer makes a choise
    let randomIndex = Math.floor(Math.random() * 3)
    computerChoise = choicesArr[randomIndex]

    // decide winner 
    // if user chooses rock and computer chooses rock = tie
    // if user chooses paper and computer chooses paper = tie
    // if user chooses scissors and computer chooses scissors = tie
    // if user === computer --> tie
    if (userChoise === computerChoise) {
        winner = 'both' //tie
    }
    // if user === rock and computer === scissors --> user wins
    else if (userChoise === 'rock' && computerChoise === 'scissors') {
        winner = 'YOU!'
    }
    // if user === paper and computer === rock --> user wins
    else if (userChoise === 'papaer' && computerChoise === 'rock') {
        winner = 'YOU!'
    }
    // if user === scissors and computer === paper --> user wins
    else if (userChoise === 'scissors' && computerChoise === 'paper') {
        winner = 'YOU!'
    }
    // anything else --> computer wins
    else {
        winner = 'Computer'
    }
    
    resultDisplay.textContent = `Computer choose ${computerChoise}. 
    You chose ${userChoise}. Winner is: ${winner}`

    console.log('userChoise: ', userChoise)
    console.log('computerChoise: ', computerChoise)
})

reset.addEventListener('click', function () {
    // rock.classList.remove('hidden')
    // paper.classList.remove('hidden')
    // scissors.classList.remove('hidden')

    // rock.removeAttribute('disabled')
    // paper.removeAttribute('disabled')
    // scissors.removeAttribute('disabled')

    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false

    resultDisplay.textContent = ''
})

/*---------------------- Functions ----------------------*/
// computer choise helper function 

