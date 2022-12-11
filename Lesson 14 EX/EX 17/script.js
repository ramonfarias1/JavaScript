function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if (num.value.length == 0){
        alert('Erro!! Digite um número')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for ( let c = 1 ; c <= 10 ; c++ ){
            let v = document.createElement('option')
            //v.setAttribute('value', `v${c}`)
            v.value = `v${c}`
            v.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(v)
        }
    }
}
