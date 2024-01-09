document.addEventListener('DOMContentLoaded', function() {
    const mostraTbdaBtn = document.getElementById('mostra_tbda');
    const limpaTbdaBtn = document.getElementById('limpa_tbda');
    const conteudoTbda = document.getElementById('conteudo_tbda');

    mostraTbdaBtn.addEventListener('click', function() {
        let numero = prompt("Digite um número para ver sua tabuada:");
        if (numero !== null && !isNaN(numero)) {
            let tabuadaHtml = '<ul>';
            for (let i = 1; i <= 10; i++) {
                tabuadaHtml += `<li>${numero} x ${i} = ${numero * i}</li>`;
            }
            tabuadaHtml += '</ul>';
            conteudoTbda.innerHTML = tabuadaHtml;
            conteudoTbda.style.display = 'block';  // Mostra a div
        } else {
            alert("Por favor, digite um número válido.");
        }
    });

    limpaTbdaBtn.addEventListener('click', function() {
        conteudoTbda.innerHTML = '';  // Limpa o conteúdo da div
        conteudoTbda.style.display = 'none';  // Esconde a div
    });
});

