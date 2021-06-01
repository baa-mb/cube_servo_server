radio.onReceivedValue(function (name, value) {
    if (lauf == 1) {
        if (name == "x") {
            pins.servoWritePin(AnalogPin.P1, Math.map(value, -1023, 1023, 0, 180))
        }
        if (name == "y") {
            pins.servoWritePin(AnalogPin.P0, Math.map(value, -1023, 1023, 0, 180))
        }
    }
    if (name == "A") {
        lauf = value
        if (value == 1) {
            basic.showIcon(IconNames.Yes)
        } else {
            pins.servoWritePin(AnalogPin.P0, 90)
            basic.showIcon(IconNames.No)
        }
    }
})
let lauf = 0
basic.showIcon(IconNames.No)
radio.setGroup(54)
lauf = 0
