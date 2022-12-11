const clock = document.getElementById('clock')
const clockImage = document.getElementById('clockImage')
onload = getClock()

function getClock(){
    const now = new Date()
    const hours = 14//now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.innerHTML = `</br>${hours}:${minutes}:${seconds}`
    if (hours < 6){
        document.body.style.background = 'black'
        clock.innerHTML += '</br></br>Good Night!</br></br>'
        clockImage.src = 'night.png'
    } else if (hours < 12){
        document.body.style.background = '#e6b15d'
        clock.innerHTML += '</br></br>Good Morning!</br></br>'
        clockImage.src = 'morning.png'
    } else if (hours < 18){
        document.body.style.background = '#FFB37B'
        clock.innerHTML += '</br></br>Good Afternoon!</br></br>'
        clockImage.src = 'afternoon.png'
    } else {
        document.body.style.background = 'black'
        clock.innerHTML += '</br></br>Good Night!</br></br>'
        clockImage.src = 'night.png'
    }
    setTimeout('getClock()', 1000)
}