let player = {
    name: "Moath",
    money: 200,
}
let firstCard
let secondCard
let cards = [] 
let sum = 0
let message = ""
let blackJack = false
let isAlive = false
let messageEl = document.getElementById("status")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $"+ player.money
function startGame(){
    if (isAlive==true)
    message = "The game has already started"
    else {
    cardsEl.textContent = "Cards: "
    firstCard = randomCard()
    secondCard = randomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    blackJack = false
    for(let i = 0; i<cards.length ;i++)
    cardsEl.textContent += cards[i] + " "
    sumEl.textContent = "Sum: " + sum
    renderGame()   
}
}
function renderGame(){
    isAlive = true
 if (sum<=20){
    message = "Do you want to draw a new card?"
 } else if (sum === 21){
    message = "You got BlackJack!!"
    player.money += 200
    playerEl.textContent = player.name + ": $"+ player.money
    blackJack=true
    isAlive=false
 } else {
    isAlive = false
    message = "You are out of the game!"
    player.money -= 5
    playerEl.textContent = player.name + ": $"+ player.money
 }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}
function newCard(){
    if (isAlive == true && blackJack == false){
    let card = randomCard()
    sum += card
    cards.push(card)
    cardsEl.textContent += card + " "
    renderGame()
    }
    else {
    message = "You can't draw another card"
    messageEl.textContent = message
    }
}

function randomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1)
    return 11
    else if(randomNum > 10)
    return 10
    else return randomNum
}