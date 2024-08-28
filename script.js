var dataCasamento = new Date("December 7, 2024 16:00:00").getTime();
var x = setInterval(function() {
    var agora = new Date().getTime();
    var distancia = dataCasamento - agora;
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    document.getElementById("contador").innerHTML = `
        <div class="numero">${dias} d</div>
        <div class="numero">${horas} h</div>
        <div class="numero">${minutos} m</div>
        <div class="numero">${segundos} s</div>
    `;
    
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "O grande dia chegou! Que todos tenhamos um bom momento juntos";
        document.getElementById("frase1").innerHTML = "";
    }
}, 1000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbykCKGUxFLN8e5FWpkkRe6UMV9qOXv6bLHkL2O27CDjSs2Qgpshly8uofkiCICKiyKo/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Muito obrigado pela resposta! Sua confirmação foi submetida com sucesso... Te esperamos ansiosos!"))
    .then(()=> {window.location.reload();})
    .catch(error => console.error ('Error!', error.message))
})

document.getElementById("copiar-pix").addEventListener("click", function() {
    const codigoPix = "00020126360014BR.GOV.BCB.PIX0114+55439964861515204000053039865802BR5925Pedro Miguel Odebrecht Na6009SAO PAULO62140510UFpE2HYtqB6304C0F4"; // Código Pix
    navigator.clipboard.writeText(codigoPix).then(() => {
        alert("Código Pix copiado para a área de transferência!");
    });
});


function toggleMenu() {
    const menu = document.querySelector('.menu-lateral');
    const toggle = document.getElementById('menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}