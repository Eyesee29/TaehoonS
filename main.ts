input.onButtonPressed(Button.A, function () {
    Player.move(1)
})
input.onButtonPressed(Button.AB, function () {
    Player.change(LedSpriteProperty.Y, 1)
    Player.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    Player.move(-1)
})
let Player_2: game.LedSprite = null
let shoot: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
let Player_Health = 5
let Player_Score = 0
basic.forever(function () {
    shoot = game.createSprite(randint(0, 10), randint(0, 10))
    shoot.change(LedSpriteProperty.Y, 1)
    if (shoot.isTouching(Player)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
        Player.delete()
        shoot.delete()
        Player_Health += -1
        basic.pause(5000)
        Player = game.createSprite(2, 2)
        basic.pause(5000)
    }
    basic.pause(5000)
    shoot.delete()
})
basic.forever(function () {
    Player_2 = game.createSprite(randint(0, 4), randint(0, 4))
    for (let index = 0; index < 5; index++) {
        Player_2.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(100)
    Player_2.delete()
})
basic.forever(function () {
    if (Player.isTouching(Player_2)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
        Player_Score += 1
        Player_2.delete()
    }
})
basic.forever(function () {
    if (Player_Score == 5) {
        basic.showString("You won")
        game.gameOver()
        game.setScore(5)
    }
    if (Player_Health < 1) {
        basic.showString("You lost")
        game.gameOver()
        game.setLife(0)
    }
})
