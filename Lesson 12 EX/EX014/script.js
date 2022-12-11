function relogio(){
var agora=new Date()
var hora=agora.getHours()
var min=agora.getMinutes()
var seg=agora.getSeconds()

document.getElementById('horacerta').innerHTML=`${hora}:${min}:${seg}`
if (hora<12){
    document.body.style.background='rgb(144, 199, 243)'
    img.src='manha.png'
} else if (hora<18){
    document.body.style.background='rgb(247, 155, 69)'
    img.src='tarde.png'
}else {
    document.body.style.background='rgb(12, 12, 12)'
    img.src='noite.png'
}
setTimeout('relogio()', 500)
}
