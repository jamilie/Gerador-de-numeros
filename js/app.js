const button = document.getElementById('gerador');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(result)) {
        result = 'Valor Inválido';
    }

    document.querySelector('.resultado > span').textContent = result;
});