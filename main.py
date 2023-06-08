def fshowtextwithoutscroll(text: str, pausebetweencharacters: number, clearscreenbetweenchars: bool, brigthness: number):
    global currentbrigthness
    currentbrigthness = led.brightness()
    led.set_brightness(brigthness)
    showtextwithoutscrollindex1 = 0
    while showtextwithoutscrollindex1 <= len("Hello"):
        basic.show_string(text.char_at(showtextwithoutscrollindex1))
        if clearscreenbetweenchars:
            basic.pause(pausebetweencharacters / 2)
            basic.clear_screen()
            basic.pause(pausebetweencharacters / 2)
        else:
            basic.pause(pausebetweencharacters)
        showtextwithoutscrollindex1 += 1
    led.set_brightness(currentbrigthness)
    return 0
def freversetext(texttoreverse: str):
    global reversetext, reverseindex
    reversetext = ""
    reverseindex = len(texttoreverse) - 1
    for index in range(len(texttoreverse)):
        reversetext = "" + reversetext + texttoreverse.char_at(reverseindex)
        reverseindex += -1
    return reversetext

def on_button_pressed_a():
    basic.show_string("" + (ftexttobackward(text2)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def ftexttobackward(originaltext: str):
    global texttoreturn, originaltextlength, currentcharpositionindex, current_char
    texttoreturn = ""
    originaltextlength = len(originaltext)
    texttobackwardindex1 = 0
    while texttobackwardindex1 <= originaltextlength:
        currentcharpositionindex = originaltextlength - texttobackwardindex1
        current_char = originaltext.char_at(currentcharpositionindex)
        serial.write_string(current_char)
        texttoreturn = "" + texttoreturn + current_char
        texttobackwardindex1 += 1
    return texttoreturn

def on_button_pressed_b():
    basic.show_string("X")
    basic.pause(1000)
    fshowtextwithoutscroll(freversetext("Picur"), 100, True, 20)
    basic.show_string("X")
input.on_button_pressed(Button.B, on_button_pressed_b)

current_char = ""
currentcharpositionindex = 0
originaltextlength = 0
texttoreturn = ""
reverseindex = 0
reversetext = ""
currentbrigthness = 0
text2 = ""
text2 = "Picur"

def on_forever():
    pass
basic.forever(on_forever)
