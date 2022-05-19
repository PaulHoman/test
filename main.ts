input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(7)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
