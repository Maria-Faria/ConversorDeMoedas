const dolar = document.querySelector('.dolar');
var cotation = 5.06;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputDolar = dolar.value;

    var real = (cotation * inputDolar).toFixed(2);

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '$' + inputDolar + ' equivalem a R$' + real;
});