let inpnum = document.getElementById('inpnum')
let allnum = []
let res = document.getElementById('res')

inpnum.addEventListener('keydown', addNumberKey)

function addNumberKey(e){
    if (e.key === 'Enter'){
        let btn = document.getElementById('btnadd')
        btn.click()
    }
}

function isNum(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, alln) {
    if (alln.indexOf(n) == -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    num = Number(inpnum.value)
    if (isNum(num) && inList(num, allnum)) {
        allnum.push(num)
        let listnum = document.getElementById('listnum')
        let opt = document.createElement('option')
        opt.innerHTML = `Number ${num} added`
        listnum.appendChild(opt)
        res.innerHTML = ''
    } else {
        alert('ERROR!!, Number already added or Incorrect')
    }
    inpnum.value = ''
    inpnum.focus()
}

function noNumber(alln){
    if (alln.length == 0){
        return true
    } else {
        return false
    }
}

function showResults(){
    if (noNumber(allnum)){
        alert('ERROR!!, Please add a number to the list')
    } else {
        let add = 0
        let higher = allnum[0]
        let smaller = allnum[0]
        for (pos in allnum){
            add += allnum[pos]
            if (allnum[pos] > higher){
                higher = allnum[pos]
            }
            if (allnum[pos] < smaller){
                smaller = allnum[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `</br>In total, we have ${allnum.length} numbers entered</br></br>`
        res.innerHTML += `The highest number entered was ${higher}</br></br>`
        res.innerHTML += `The smallest number entered was ${smaller}</br></br>`
        res.innerHTML += `The sum of the all numbers is ${add} </br></br>`
        res.innerHTML += `The average of the entered values is ${add / allnum.length}`
    }
}