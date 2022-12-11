let friend = {
    name: 'guts', 
    sexo: 'male',
    height: '1.75m', 
    weight: 80, 
    fatten(p=0){
        this.weight += p
    }}

friend.fatten(3)
console.log(`${friend.name} fed up ${friend.weight}Kg`)