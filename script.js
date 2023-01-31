const playerArea = document.querySelector('.player')
const enemyArea = document.querySelector('.enemy')
const attackBtn = document.querySelector('.attack-btn')
const specialAttackBtn = document.querySelector('.special-attack-btn')
const focusBtn = document.querySelector('.focus-btn')
const playerName = document.querySelector('.player .name')
const playerAttack = document.querySelector('.player .attack')
const playerDefence = document.querySelector('.player .defence')
const playerHealth = document.querySelector('.player .health')
const enemyName = document.querySelector('.enemy .name')
const enemyAttack = document.querySelector('.enemy .attack')
const enemyDefence = document.querySelector('.enemy .defence')
const enemyHealth = document.querySelector('.enemy .health')
let power;
let damage;
const activities = [launchAttack,launchSpecialAttack,launchFocus]

class Character {
    constructor(name,strength,defence,image){
        this.name=name,
        this.strength=strength,
        this.defence=defence
        this.image=image
    }

    health=100

    attack() {
        power=this.strength*2
    }

    focus() {
        this.strength+=5
        this.defence+=5
    }
}

class Human extends Character {
    specialAttack() {
        power=this.strength*Math.ceil(Math.random()*3)
    }
}
const player = new Human('Nickname',15,15,'www')

class Monster extends Character {
    specialAttack() {
        power=this.strength*Math.ceil(Math.random()*3)
    }
}
const monster1 = new Monster('Monster1',20,10,'www')
const monster2 = new Monster('Monster2',15,15,'www')
const monster3 = new Monster('Monster3',10,20,'www')
const monsters = [monster1,monster2,monster3]
const enemy = monsters[Math.round(Math.random()*2)]

let turn = player

function calculateStats() {
    playerName.innerText=player.name
    playerAttack.innerText=player.strength
    playerDefence.innerText=player.defence
    playerHealth.innerText=player.health
    enemyName.innerText=enemy.name
    enemyAttack.innerText=enemy.strength
    enemyDefence.innerText=enemy.defence
    enemyHealth.innerText=enemy.health
}
calculateStats()

/// PLAYER AND ENEMY ATTACK

function calculateAttack() {
    turn=player === turn ? enemy : player
    damage=power-turn.defence
    if (damage>0) {turn.health=turn.health-damage}
    if (turn.health<0) {console.log(turn.name + 'przegrał')}
}

function launchAttack() {
    turn.attack()
    calculateAttack()
    calculateStats()
}

function launchSpecialAttack() {
    turn.specialAttack()
    calculateAttack()
    calculateStats()
}

function launchFocus() {
    turn.focus()
    turn=player === turn ? enemy : player
    calculateStats()
}

function enemyAct() {
    activities[Math.round(Math.random()*2)]()
}

attackBtn.addEventListener('click',launchAttack)
specialAttackBtn.addEventListener('click',launchSpecialAttack)
focusBtn.addEventListener('click',launchFocus)