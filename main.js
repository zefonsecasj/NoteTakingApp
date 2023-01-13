output = window.document.getElementById("Res")
var counter = 0

function add_note(){
    inputTxt = window.document.getElementById("inputTxt")
    if(inputTxt.value != ''){
        var newNote = document.createElement("section")
        var txt = inputTxt.value
        txt = txt.replace(/\r?\n/g,'<br />')

        var date = new Date()
        var stdDate = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`
        newNote.innerHTML = stdDate + '<br>' + '<br>'+ txt
        newNote.id = `Note_${counter}`
        output.appendChild(newNote)
        output.innerHTML += "<button class=closeButton id="+counter+" onclick= \"clean_note(this.id)\">X</button>"
        counter++
        inputTxt.value = ''
    }
    else{
        window.alert("Write Something!")
    }
    
}

function clean_note(id){

    var cleanNote = window.document.getElementById(`Note_${id}`)
    var cleanButton = window.document.getElementById(`${id}`)

    cleanNote.remove()
    cleanButton.remove()
}