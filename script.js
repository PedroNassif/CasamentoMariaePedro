var dataCasamento = new Date("December 7, 2024 16:00:00").getTime();
var x = setInterval(function() {
    var agora = new Date().getTime();
    var distancia = dataCasamento - agora;
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    document.getElementById("contador").innerHTML = `
        <div class="numero">${dias}d</div>
        <div class="numero">${horas}h</div>
        <div class="numero">${minutos}m</div>
        <div class="numero">${segundos}s</div>
    `;
    
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "O grande dia chegou!";
        document.getElementById("frase1").innerHTML = "";
    }
}, 1000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbykCKGUxFLN8e5FWpkkRe6UMV9qOXv6bLHkL2O27CDjSs2Qgpshly8uofkiCICKiyKo/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Obrigado pela resposta! Sua confirmação foi submetida com sucesso."))
    .then(()=> {window.location.reload();})
    .catch(error => console.error ('Error!', error.message))
})