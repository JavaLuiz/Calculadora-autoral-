function inserirValores(num) {
    entrada = document.getElementById('valor').value
    document.getElementById('valor').value = entrada + num
    
}   

function calcular () {
    entrada = document.getElementById('valor').value
    document.getElementById('valor').value = eval(entrada)
}

function limpar () {
    document.getElementById('valor').value = ""
}

function inverterValores() {
    calcular()
    const input= document.getElementById('valor').value
    document.getElementById('valor').value = input * -1
    
}   
