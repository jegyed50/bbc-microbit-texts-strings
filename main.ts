function texttobackward (originaltext: string) {
    texttoreturn = ""
    originaltextlength = originaltext.length
    for (let texttobackwardindex1 = 0; texttobackwardindex1 <= originaltextlength; texttobackwardindex1++) {
        currentcharpositionindex = originaltextlength - texttobackwardindex1
        current_char = originaltext.charAt(currentcharpositionindex)
        serial.writeString(current_char)
        texttoreturn = "" + texttoreturn + current_char
    }
    return texttoreturn
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (texttobackward(text1)))
})
function showtextwithoutscroll (text: string, pausebetweencharacters: number, clearscreenbetweenchars: boolean, brigthness: number) {
    currentbrigthness = led.brightness()
    led.setBrightness(brigthness)
    for (let showtextwithoutscrollindex1 = 0; showtextwithoutscrollindex1 <= "Hello".length; showtextwithoutscrollindex1++) {
        basic.showString(text.charAt(showtextwithoutscrollindex1))
        if (clearscreenbetweenchars) {
            basic.pause(pausebetweencharacters / 2)
            basic.clearScreen()
            basic.pause(pausebetweencharacters / 2)
        } else {
            basic.pause(pausebetweencharacters)
        }
    }
    led.setBrightness(currentbrigthness)
    return 0
}
input.onButtonPressed(Button.B, function () {
    basic.showString("X")
    showtextwithoutscroll("ESZTER", 100, true, 20)
    basic.showString("X")
})
let currentbrigthness = 0
let current_char = ""
let currentcharpositionindex = 0
let originaltextlength = 0
let texttoreturn = ""
let text1 = ""
text1 = "Picur"
basic.forever(function () {
	
})
