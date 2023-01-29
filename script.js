const playerArea = document.querySelector('.player')
const enemyArea = document.querySelector('.enemy')
const attack = document.querySelector('.attack')

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
    }
}

const geralt = new Character('Geralt',15,15,'www')
const monster = new Character('Monster',25,5,'www')
const monster2 = new Character('Monster2',15,15,'www')
const monster3 = new Character('Monster3',10,20,'www')
const monsters = [monster,monster2,monster3]

let player = geralt
let enemy = monsters[Math.round(Math.random()*2)]
let turn = player

attack.addEventListener('click',() => {
    if (turn===player) {
        enemy.receiveAttack()
    } else {
        player.receiveAttack()
    }
    if (turn.health<0) {console.log(turn.name + 'przegrał')}
    console.log(player)
    console.log(enemy)
})