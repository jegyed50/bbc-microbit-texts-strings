function fshowtextwithoutscroll (text: string, pausebetweencharacters: number, clearscreenbetweenchars: boolean, brigthness: number) {
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
function freversetext (texttoreverse: string) {
    reversetext = ""
    reverseindex = texttoreverse.length - 1
    for (let index = 0; index < texttoreverse.length; index++) {
        reversetext = "" + reversetext + texttoreverse.charAt(reverseindex)
        reverseindex += -1
    }
    return reversetext
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (ftexttobackward(text)))
})
function ftexttobackward (originaltext: string) {
    texttoreturn = ""
    originaltextlength = originaltext.length
    for (let texttobackwardindex1 = 0; texttobackwardindex1 <= originaltextlength; texttobackwardindex1++) {
        currentcharpositionindex = originaltextlength - texttobackwardindex1
        current_char = originaltext.charAt(currentcharpositionindex)
        texttoreturn = "" + texttoreturn + current_char
    }
    return texttoreturn
}
input.onButtonPressed(Button.B, function () {
    basic.showString("X")
    fshowtextwithoutscroll("ESZTER", 100, true, 20)
    basic.pause(1000)
    fshowtextwithoutscroll(freversetext("Picur"), 100, true, 20)
    basic.showString("X")
})
let current_char = ""
let currentcharpositionindex = 0
let originaltextlength = 0
let texttoreturn = ""
let reverseindex = 0
let reversetext = ""
let currentbrigthness = 0
let text = ""
text = "Picur"
basic.forever(function () {
	
})
