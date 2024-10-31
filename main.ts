basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (!(calliBot2.entfernung(C2Einheit.cm) < 33)) {
            basic.setLedColor(0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
        basic.setLedColor(0xff0000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showString("30")
        while (!(calliBot2.entfernung(C2Einheit.cm) < 23)) {
            basic.setLedColor(0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
        basic.setLedColor(0xff0000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showString("20")
        while (!(calliBot2.entfernung(C2Einheit.cm) < 13)) {
            basic.setLedColor(0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
        basic.setLedColor(0xff0000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showString("10")
        while (!(calliBot2.entfernung(C2Einheit.cm) < 4)) {
            basic.setLedColor(0x00ff00)
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
        basic.setLedColor(0xff0000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showString("1")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        if (calliBot2.entfernung(C2Einheit.cm) < 33) {
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 30.cm")
        } else {
            while (!(calliBot2.entfernung(C2Einheit.cm) < 33)) {
                basic.setLedColor(0x00ff00)
                calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
            }
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 30.cm")
        }
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        if (calliBot2.entfernung(C2Einheit.cm) < 23) {
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 20.cm")
        } else {
            while (!(calliBot2.entfernung(C2Einheit.cm) < 23)) {
                basic.setLedColor(0x00ff00)
                calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
            }
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 20.cm")
        }
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        if (calliBot2.entfernung(C2Einheit.cm) < 13) {
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 10.cm")
        } else {
            while (!(calliBot2.entfernung(C2Einheit.cm) < 13)) {
                basic.setLedColor(0x00ff00)
                calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
            }
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 10.cm")
        }
    }
    if (input.pinIsPressed(TouchPin.P3)) {
        if (calliBot2.entfernung(C2Einheit.cm) < 4.5) {
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 1.cm")
        } else {
            while (!(calliBot2.entfernung(C2Einheit.cm) < 4.5)) {
                basic.setLedColor(0x00ff00)
                calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
            }
            basic.setLedColor(0xff0000)
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.showString("Abstand 1.cm")
        }
    }
})
