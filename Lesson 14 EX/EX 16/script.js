document.getElementById('botao').addEventListener('click', clicar)

function clicar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resp = document.getElementById('resp')

    if (inicio.value.length == 0){
        alert('!ERRO! Não deixe o [ INÍCIO ] em BRANCO')
    } else if (fim.value.length == 0){
        alert('!ERRO! Não deixe o [ FIM ] em BRANCO')
    } else {
        if(passo.value.length == 0 || passo.value == 0){
            alert('Número de passo não definido, considerando Passo 1')
            passo.value = 1
        }
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        resp.innerHTML = '<p>Contando...</p>'
        if (i < f) {
            for ( let c = i ; c <= f ; c += p ){
                resp.innerHTML += `${c}&#128073`
            }
        } else {
            for ( let c = i ; c >= f ; c -= p ){
                resp.innerHTML += `${c}&#128073`
            }
        }
        resp.innerHTML += '&#128681'
    }
}
