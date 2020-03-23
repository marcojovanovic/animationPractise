// napraviti krug u krugu, sa bojama i gradient iz originala+
// animacija zavisi od samo containera, moj zakljucak za sve animacije da se rade na containeru
// gadjas velicinu kontainera i krugova +
// pointer postavi na vrh kruga +
// uradi animacije rast, kretanje, skupljanje+
// total time = 7500 +
//  const breathTime = (totalTime /5) *2 ; const holdTime = totalTime / 5 +
// setInterval funkcija za dodavnje teksta, rast, setTimeout


const text = document.querySelector('#text')
const container = document.querySelector('.container')

let totalTime = 7550
const breathTime = (totalTime /5) *2
const holdTime = totalTime / 5 

changeState()

function changeState(){


  text.innerHTML = 'Breath In'
  container.classList.add('grow')
  container.classList.remove('shrink')
  text.style.fontWeight = 'bold'
  setTimeout(()=>{

    text.innerHTML = 'Hold'

   setTimeout(()=>{

    text.innerHTML = 'Breath Out'
    container.classList.add('shrink')
    container.classList.remove('grow')


  }, holdTime)




  }, breathTime)




}



setInterval(changeState, totalTime)