input.onButtonPressed(Button.A, function () {
    Player.move(1)
})
input.onButtonPressed(Button.AB, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(-1)
})
let shoot: game.LedSprite = null
let Player_2: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
game.setScore(0)
game.setLife(5)
basic.forever(function () {
    Player_2 = game.createSprite(randint(0, 4), randint(0, 4))
    for (let index = 0; index < 4; index++) {
        Player_2.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(5000)
    Player_2.delete()
    shoot = game.createSprite(randint(0, 10), randint(0, 10))
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, 1)
        if (shoot.isTouching(Player)) {
            Player.delete()
            shoot.delete()
            game.removeLife(1)
            basic.pause(5000)
            Player = game.createSprite(2, 2)
        }
    }
})
basic.forever(function () {
    if (Player.isTouching(Player_2)) {
        game.addScore(1)
        Player_2.delete()
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
