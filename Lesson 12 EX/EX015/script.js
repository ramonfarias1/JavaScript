document.getElementById('botao').addEventListener('click', clicar)

function clicar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = Number(document.getElementById('anoNasc').value)
    if (anoNasc < 1900 || anoNasc > anoAtual){
        alert('!!ERRO!! Por favor, verifique os dados e tente novamente!')
    } else {
        var resp = document.getElementById('resp')
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - anoNasc
        var img = document.createElement('img') //cria o elemento img para imagens
        img.setAttribute('id', 'imagem') //cria um atributo (id,name,class e etc) para o elemento img
        if (sexo[0].checked){
            if (idade < 2){
                img.setAttribute('src', 'bebehomem.png') //cria um atributo src(source = fonte da imagem)
                //bebê
            } else if (idade < 12){
                img.setAttribute('src', 'criancahomem.png')
                //criança
            } else if (idade < 18){
                img.setAttribute('src', 'adolescentehomem.png')
                //adolescente
            } else if (idade < 30){
                img.setAttribute('src', 'homemjovem.png')
                //jovem
            } else if (idade < 60){
                img.setAttribute('src', 'homemadulto.png')
                //adulto
            } else {
                img.setAttribute('src', 'idoso.png')
                //idoso
            }
            resp.innerHTML=`<p>Detectamos um Homem de ${idade} anos de idade</p>`
            resp.appendChild(img) //appendchild aqui acrescenta um elemento criado no javascript que o caso é o elemento img, mas pode ser qualquer elemento criado pelo javascript.
            //img.style.paddingTop = '10px'
        }else if(sexo[1].checked){
            if (idade < 2){
                img.setAttribute('src', 'bebemulher.png')
                //bebê
            } else if (idade < 12){
                img.setAttribute('src', 'criancamulher.png')
                //criança
            } else if (idade < 18){
                img.setAttribute('src', 'adolescentemulher.png')
                //adolescente
            } else if (idade < 30){
                img.setAttribute('src', 'mulherjovem.png')
                //jovem
            } else if (idade < 60){
                img.setAttribute('src', 'mulheradulta.png')
                //adulto
            } else {
                img.setAttribute('src', 'idosa.png')
                //idoso
            }
            resp.innerHTML= `<p>Detectamos uma Mulher de ${idade} anos de idade</p>`
            resp.appendChild(img)
            //img.style.paddingTop = '10px'
        }else {
            alert('!!ERRO!! Selecione o seu Gênero!')
        }
    }
}

/* Linhas de comando que eu vi em um comentário no youtube

ao invés de fazer 2 cadeias de ifs e elses (pra homem e mulher), eu separei as imagens em 2 pastas e fiz da seguinte forma:

        if(fgen[0].checked) genero = 'homem';
        else genero = 'mulher';

        if(idade <= 10) img.setAttribute('src', `images/${genero}/baby.png`)
        else if(idade <= 21) img.setAttribute('src', `images/${genero}/teen.png`)
        else if(idade <= 50) img.setAttribute('src', `images/${genero}/adult.png`)
        else img.setAttribute('src', `images/${genero}/old.png`)

dai dependendo do gênero o algoritmo puxa a foto de uma pasta diferente

*/

