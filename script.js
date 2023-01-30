const playerArea = document.querySelector('.player')
const enemyArea = document.querySelector('.enemy')
const attackBtn = document.querySelector('.attack-btn')
const playerName = document.querySelector('.player .name')
const playerAttack = document.querySelector('.player .attack')
const playerDefence = document.querySelector('.player .defence')
const playerHealth = document.querySelector('.player .health')
const enemyName = document.querySelector('.enemy .name')
const enemyAttack = document.querySelector('.enemy .attack')
const enemyDefence = document.querySelector('.enemy .defence')
const enemyHealth = document.querySelector('.enemy .health')

class Character {
    constructor(name,attack,defence,image){
        this.name=name,
        this.attack=attack,
        this.defence=defence
        this.image=image
    }

    health=100

    receiveAttack() {
        this.health=this.health-turn.attack*2-this.defence
        turn=player === turn ? enemy : player
        calculate()
    }
}

const player = new Character('Geralt',15,15,'www')
const monster = new Character('Monster',25,5,'www')
const monster2 = new Character('Monster2',15,15,'www')
const monster3 = new Character('Monster3',10,20,'www')
const monsters = [monster,monster2,monster3]

const enemy = monsters[Math.round(Math.random()*2)]
let turn = player

function calculate() {
    playerName.innerText=player.name
    playerAttack.innerText=player.attack
    playerDefence.innerText=player.defence
    playerHealth.innerText=player.health
    enemyName.innerText=enemy.name
    enemyAttack.innerText=enemy.attack
    enemyDefence.innerText=enemy.defence
    enemyHealth.innerText=enemy.health
}

attackBtn.addEventListener('click',() => {
    turn.receiveAttack()
    if (turn.health<0) {console.log(turn.name + 'przegrał')}
    console.log(player)
    console.log(enemy)
})