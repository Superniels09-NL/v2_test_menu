input.onButtonPressed(Button.A, function () {
    if (!(menu == 1)) {
        menu += -1
    }
})
function draw (menu: number) {
    basic.clearScreen()
    if (menu == 1) {
        show(input.soundLevel(), 255)
    } else {
        if (menu == 2) {
            show(input.lightLevel(), 255)
        } else {
            if (menu == 3) {
                images.arrowImage(ArrowNames.North).showImage(0)
            } else {
                if (menu == 4) {
                    show(input.temperature() + 20, 50)
                } else {
                    if (menu == 5) {
                        basic.showIcon(IconNames.Happy)
                        music.playMelody("C E F F G G B A ", 360)
                    } else {
                    	
                    }
                }
            }
        }
    }
}
function row (y: number) {
    led.plot(0, y)
    led.plot(1, y)
    led.plot(2, y)
    led.plot(3, y)
    led.plot(4, y)
}
input.onButtonPressed(Button.B, function () {
    if (!(menu == 5)) {
        menu += 1
    }
})
function show (num: number, _of: number) {
    for (let index = 0; index <= num / _of * 4; index++) {
        row(4 - index)
    }
}
let menu = 0
menu = 1
basic.forever(function () {
    draw(menu)
})
