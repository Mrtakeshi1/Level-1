var header = document.getElementById ('header')
  header.textContent = "JavaScript made this!!"
  header.style.fontSize = "30px"

var header2 = document.createElement("span")

var header3 = document.createElement('span')
  header3.textContent = "Takeshi "
  header.append(header3)
  header2.textContent = " wrote the JavaScript"
  header2.style.color = "black"
  header2.style.fontSize = "20px"
  header2.style.alignItems ="center"
  header2.style.flexDirection = "column"
  header.style.flexDirection = "column"
  header.style.alignItems = "center"
  header.style.display = "flex"
  header3.style.color = "peachpuff"
  header3.append (header2)

  function addText () { 
    
    

    if (dropDown.value === 'theme-one') {
        for (let i = 0; i < left.length; i++) {
            left[i].style.backgroundColor = 'burlywood'
            right[i].style.backgroundColor = 'lightblue'
    }}
        else if (dropDown.value === "theme-two") {
            for (let i = 0; i < left.length; i++) {
                left[i].style.backgroundColor = 'red'
                right[i].style.backgroundColor = 'black'
                left[i].style.color = 'white'
                right[i].style.color = 'white'
        }}

        }

var message = document.querySelectorAll(".messages > div")
 for (var i = 0; i < message.length; i++) {
    message[0].textContent = "Hi"
}
 for (var i = 0; i < message.length; i++) {
    message[1].textContent = "Hello"
}
 for (var i = 0; i < message.length; i++) {
    message[2].textContent = "Bye"
}
 for (var i = 0; i < message.length; i++) {
    message[3].textContent = "Good bye"
}

var clearButton = document.getElementById ('clear-button')
 function clear () {
    for ( var i = 0; i < message.length; i++) {
        message[i].textContent = ""
    }
}

clearButton.addEventListener ('click', clear)

var left = document.querySelectorAll ( ".left")

var right = document.querySelectorAll ( ".right")

var dropDown = document.getElementById ("theme-drop-down")

function colorChange () { 
    if (dropDown.value === 'theme-one') {
    for (let i = 0; i < left.length; i++) {
        left[i].style.backgroundColor = 'burlywood'
        right[i].style.backgroundColor = 'lightblue'
}}
    else if (dropDown.value === "theme-two") {
        for (let i = 0; i < left.length; i++) {
            left[i].style.backgroundColor = 'red'
            right[i].style.backgroundColor = 'black'
            left[i].style.color = 'white'
            right[i].style.color = 'white'
    }}
    }

dropDown.addEventListener('change', colorChange)

var inputBox = document.getElementById ("input")
 inputBox.value = ""

