const playerArea = document.querySelector('.char-player')
const enemyArea = document.querySelector('.char-enemy')
const btns = document.querySelectorAll('.btn')
const attackBtn = document.querySelector('.attack-btn')
const specialAttackBtn = document.querySelector('.special-attack-btn')
const focusBtn = document.querySelector('.focus-btn')
const playerName = document.querySelector('.stats-player .name')
const playerAttack = document.querySelector('.stats-player .attack')
const playerDefence = document.querySelector('.stats-player .defence')
const playerHealth = document.querySelector('.stats-player .health')
const enemyName = document.querySelector('.stats-enemy .name')
const enemyAttack = document.querySelector('.stats-enemy .attack')
const enemyDefence = document.querySelector('.stats-enemy .defence')
const enemyHealth = document.querySelector('.stats-enemy .health')
const imgMonster1 = document.querySelector('.img-monster1')
const imgMonster2 = document.querySelector('.img-monster2')
const playerFocus = document.querySelector('.img-player::after')
const enemyFocus = document.querySelector('.img-monster::after')
let power;
let damage;
const activities = [launchAttack,launchSpecialAttack,launchFocus]

class Character {
    constructor(name,strength,defence,image){
        this.name=name,
        this.strength=strength,
        this.defence=defence,
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

    showImage() {
        this.image.style.display='block'
    }
}
const monster1 = new Monster('Monster1',20,10,imgMonster1)
const monster2 = new Monster('Monster2',15,15,imgMonster2)
const monsters = [monster1,monster2]
const enemy = monsters[Math.round(Math.random())]
enemy.showImage()

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

function enemyAct() {
    activities[Math.round(Math.random()*2)]()
    btns.forEach(item => {
        item.removeAttribute('disabled')
    })
}

function calculateStatsAndEnemyAct() {
    calculateStats()
    if (turn===enemy) {
        btns.forEach(item => {
            item.setAttribute('disabled','')
        })
        setTimeout(enemyAct,3000)
    }
}

function launchAttack() {
    turn.attack()
    calculateAttack()
    calculateStatsAndEnemyAct()
}

function launchSpecialAttack() {
    turn.specialAttack()
    calculateAttack()
    calculateStatsAndEnemyAct()
}

function launchFocus() {
    turn.focus()
    playerFocus.classList.toggle('focus-active',turn===enemy)
    turn=player === turn ? enemy : player
    calculateStatsAndEnemyAct()
}


attackBtn.addEventListener('click',launchAttack)
specialAttackBtn.addEventListener('click',launchSpecialAttack)
focusBtn.addEventListener('click',launchFocus)

//JAK POBRAĆ PSEUDOELEMENT??