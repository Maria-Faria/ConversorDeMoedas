const dolar = document.querySelector('.dolar');
var cotacao = 5.06;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputDolar = dolar.value;

    var real = (cotacao * inputDolar).toFixed(2);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '$' + inputDolar + ' equivalem a R$' + real;
});
