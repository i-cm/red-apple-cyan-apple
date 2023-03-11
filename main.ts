sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite3.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
mySprite3 = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . 6 6 6 c 7 7 6 6 . . . . 
    . . 8 6 6 6 6 c 7 e 9 9 6 6 . . 
    . 8 6 6 6 6 6 c 6 e e 9 9 9 6 . 
    . 8 6 6 6 9 6 c c 9 9 9 9 9 6 . 
    8 6 6 6 9 9 9 9 9 9 9 9 9 9 9 6 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 9 6 
    . 6 6 6 9 9 9 9 9 9 9 9 9 9 6 . 
    . 9 6 6 9 9 9 9 9 9 9 9 9 9 6 . 
    . . 9 6 6 9 9 9 9 9 9 9 9 6 . . 
    . . . 9 9 9 9 9 9 9 9 6 6 . . . 
    . . . . . 9 9 6 6 6 6 . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
info.startCountdown(10)
mySprite2.setPosition(randint(0, 160), randint(0, 120))
mySprite3.setPosition(randint(0, 160), randint(0, 120))
mySprite.setStayInScreen(true)
game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
game.setGameOverEffect(false, effects.melt)
game.setGameOverScoringType(game.ScoringType.HighScore)
game.onUpdateInterval(1000, function () {
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    mySprite3.setPosition(randint(0, 160), randint(0, 120))
})
