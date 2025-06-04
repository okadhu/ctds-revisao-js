function somar(){
    const valor1 = parseFloat(document.getElementById("valor1").value)
    const valor2 = parseFloat(document.getElementById("valor2").value)
    const resultado = valor1 + valor2;
    document.getElementById('resultado').innerHTML = resultado;
}
function subtrair(){
    const valor1 = document.getElementById("valor1").value
    const valor2 = document.getElementById("valor2").value
    const resultado = valor1 - valor2;
    document.getElementById('resultado').innerHTML = resultado;
}
function multiplicar(){
    const valor1 = document.getElementById("valor1").value
    const valor2 = document.getElementById("valor2").value
    const resultado = valor1 * valor2;
    document.getElementById('resultado').innerHTML = resultado;
}
function dividir(){
    const valor1 = document.getElementById("valor1").value
    const valor2 = document.getElementById("valor2").value
    const resultado = valor1 / valor2;
    document.getElementById('resultado').innerHTML = resultado;
}