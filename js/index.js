// let messageArray = ["Hi, I'm Danny!"];
// let textPosition = 0;
// let speed = 100;


// typrWriter = () => {
//   document.querySelector('#message').innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

//   if(textPosition++ != messageArray[0].length)
//   setTimeout(typrWriter, speed);
// }

// window.addEventListener("load", typewriter);

// typrWriter();



   
const textDisplay = document.getElementById('text')
const phrases = ["Hello, I'm Danny!"]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
