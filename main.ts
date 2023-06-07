function texttobackward (originaltext: string) {
    texttoreturn = ""
    originaltextlength = originaltext.length
    for (let currentcharpositionindex = 0; currentcharpositionindex <= originaltextlength; currentcharpositionindex++) {
        texttoreturn = "" + texttoreturn + originaltext.charAt(originaltextlength - currentcharpositionindex)
    }
    return texttoreturn
}
let originaltextlength = 0
let texttoreturn = ""
let text1 = "Picur1"
basic.showString("" + (texttobackward(text1)))
basic.forever(function () {
	
})
