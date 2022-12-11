onload = MostrarTodasTabuadas()
function MostrarTodasTabuadas(){
    ttladi.style.display = ''
    ttlsub.style.display = ''
    ttlmult.style.display = ''
    ttldivi.style.display = ''
    tabadi.style.display = ''
    tabsub.style.display = ''
    tabmult.style.display = ''
    tabdivi.style.display = ''
    tabadi.innerHTML = ''
    tabsub.innerHTML = ''
    tabmult.innerHTML = ''
    tabdivi.innerHTML = ''
    tabdivi.style.columnCount = ''
    tabdivi.style.textAlign = ''
    tabdivi.style.paddingBottom = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
            tabmult.innerHTML += '<p></p>'
        }
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
            tabmult.innerHTML += '<p></p>'
        }
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
        if (n == 0){
            tabdivi.style.columnCount = '1'
            tabdivi.style.textAlign = 'center'
            tabdivi.style.paddingBottom = '20px'
            tabdivi.innerHTML = `Todo número divido por zero é infinito`
        } else {
            for ( let c = n ; c <= n ; c++ ){
                for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                    tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
                }
                tabdivi.innerHTML += '<p></p>'
            }
        }
    }
}
function MostrarTabuadaAdicao(){
    ttladi.style.display = ''
    ttlsub.style.display = 'none'
    ttlmult.style.display = 'none'
    ttldivi.style.display = 'none'
    tabadi.style.display = ''
    tabsub.style.display = 'none'
    tabmult.style.display = 'none'
    tabdivi.style.display = 'none'
    tabadi.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabadi.innerHTML += `${c} + ${c2} = ${c + c2}</br>`
            }
            tabadi.innerHTML += '<p></p>'
        }
    }
}
function MostrarTabuadaSubtracao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = ''
    ttlmult.style.display = 'none'
    ttldivi.style.display = 'none'
    tabadi.style.display = 'none'
    tabsub.style.display = ''
    tabmult.style.display = 'none'
    tabdivi.style.display = 'none'
    tabsub.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = c ; c2 <= 10 + c ; c2++ ){
                tabsub.innerHTML += `${c2} - ${c} = ${c2 - c}</br>`
            }
            tabsub.innerHTML += '<p></p>'
        }
    }
}
function MostrarTabuadaMultiplicacao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = 'none'
    ttlmult.style.display = ''
    ttldivi.style.display = 'none'
    tabadi.style.display = 'none'
    tabsub.style.display = 'none'
    tabmult.style.display = ''
    tabdivi.style.display = 'none'
    tabmult.innerHTML = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabmult.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        for ( let c = n ; c <= n ; c++ ){
            for ( let c2 = 1 ; c2 <= 10 ; c2++ ){
                tabmult.innerHTML += `${c} x ${c2} = ${c * c2}</br>`
            }
            tabmult.innerHTML += '<p></p>'
        }
    }
}
function MostrarTabuadaDivisao(){
    ttladi.style.display = 'none'
    ttlsub.style.display = 'none'
    ttlmult.style.display = 'none'
    ttldivi.style.display = ''
    tabadi.style.display = 'none'
    tabsub.style.display = 'none'
    tabmult.style.display = 'none'
    tabdivi.style.display = ''
    tabdivi.innerHTML = ''
    tabdivi.style.columnCount = ''
    tabdivi.style.textAlign = ''
    tabdivi.style.paddingBottom = ''
    if (num.value.length == 0){
        for ( let c = 1 ; c <= 10 ; c++ ){
            for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
            }
            tabdivi.innerHTML += '<p></p>'
        }
    } else {
        let n = Number(num.value)
        if (n == 0){
            tabdivi.style.columnCount = '1'
            tabdivi.style.textAlign = 'center'
            tabdivi.style.paddingBottom = '20px'
            tabdivi.innerHTML = `Todo número divido por zero é infinito`
        } else {
            for ( let c = n ; c <= n ; c++ ){
                for ( let c2 = c ; c2 <= 10 * c ; c2 = c2 + c ){
                    tabdivi.innerHTML += `${c2} &divide; ${c} = ${c2 / c}</br>`
                }
                tabdivi.innerHTML += '<p></p>'
            }
        }
    }
}