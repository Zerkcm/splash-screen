let indice_x = 0
let indice_y = 0
function Splash_Screen () {
    indice_x = 0
    indice_y = 0
    for (let indice_x = 0; indice_x <= 4; indice_x++) {
        basic.pause(100)
        for (let indice_y = 0; indice_y <= 4; indice_y++) {
            led.plot(indice_x, indice_y)
            basic.pause(100)
        }
    }
}
basic.forever(function () {
    Splash_Screen()
})
