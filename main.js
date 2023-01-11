output = window.document.getElementById("Res")
var counter = 0

function add_note(){
    inputTxt = window.document.getElementById("inputTxt")
    var newNote = document.createElement("section")
    var txt = inputTxt.value
    txt = txt.replace(/\r?\n/g,'<br />')
    for(pos in txt){
        if(pos%100 == 0){
            txt[pos+1] += "<br>"
            window.alert(txt[pos])
        } 
    }
    newNote.innerHTML = txt
    newNote.id = `Note_${counter}`
    output.appendChild(newNote)
    output.innerHTML += "<button class=closeButton id="+counter+" onclick= \"clean_note()\">X</button>"
    counter++
    inputTxt.value = ''
}

function clean_note(){
    window.alert("Test")
}