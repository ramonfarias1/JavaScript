let num = [9, 3, 6, 5, 7]

console.log(num)
console.log(`o comprimento da array é de ${num.length} índices`)
console.log(`o primeiro valor é ${num[0]}`)
num.push(4)
num.sort()
console.log(num)
console.log(`o comprimento da array é de ${num.length} índices`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('o valor não foi encontrado')
} else{
    console.log(`o valor 7 está no índice ${pos}`)
}

for( pos = 0 ; pos < num.length ; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for( let pos in num ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}