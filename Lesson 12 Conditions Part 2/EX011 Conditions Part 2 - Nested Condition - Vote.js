var idade = 66
console.log(`você tem ${idade} anos.`)
if(idade <16){
    console.log('você não vota.')
}else if(idade <18 || idade >65){
    console.log('o seu voto é opcional.')
}else
    console.log('o seu voto é obrigatório.')
