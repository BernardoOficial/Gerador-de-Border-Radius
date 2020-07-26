/* É chamado o escutador de evente no 'form' pois é o pai dos elementos e, sendo assim, escuta qualquer ação sobre os filhos. */
var form = document.querySelector('form')
form.addEventListener('input', function() {
    var topLeft = form.topEsquerdo.value;
    var topRight = form.topDireito.value;
    var bottomLeft = form.bottomEsquerdo.value;
    var bottomRight = form.bottomDireito.value;

    modificarVisualizador(topLeft, topRight, bottomLeft, bottomRight);

    var mensagens = codigoParaOUsuárioVer(topLeft, topRight, bottomLeft, bottomRight);

    colocarCadaArrayDentroDoSpan(mensagens);

});

/* Função para modificar a propriedade Border-Radius do elemento a partir do que é escrito pelo usuário. */
function modificarVisualizador(topLeft, topRight, bottomLeft, bottomRight) {
    
    var visualizador = document.querySelector('.visualizador');

    if(!topLeft.length == 0) {visualizador.style.borderTopLeftRadius = `${topLeft}px`;} else { visualizador.style.borderTopLeftRadius = `${0}px`; }
    if(!topRight.length == 0) { visualizador.style.borderTopRightRadius = `${topRight}px`; } else { visualizador.style.borderTopRightRadius = `${0}px`; }
    if(!bottomLeft.length == 0) { visualizador.style.borderBottomLeftRadius = `${bottomLeft}px`; } else { visualizador.style.borderBottomLeftRadius = `${0}px`; }
    if(!bottomRight.length == 0) { visualizador.style.borderBottomRightRadius = `${bottomRight}px`; } else { visualizador.style.borderBottomRightRadius = `${0}px`; }
}

/* Função para exibir ao usuário o código que está sendo passado para a propriedade Border-Radius */
function codigoParaOUsuárioVer(topLeft, topRight, bottomLeft, bottomRight) {
    var mensagens = [];

    if(!topLeft.length == 0) { mensagens.push(`border-top-left-radius: ${topLeft}px;`); }
    if(!topRight.length == 0) { mensagens.push(`border-top-right-radius: ${topRight}px;`); }
    if(!bottomLeft.length == 0) { mensagens.push(`border-bottom-left-radius: ${bottomLeft}px;`); }
    if(!bottomRight.length == 0) { mensagens.push(`border-bottom-right-radius: ${bottomRight}px;`); }

    return mensagens;
    
}

/* Função para colocar cada mensagem do array dentro do span */
function colocarCadaArrayDentroDoSpan(mensagens) {

    var visualizador = document.querySelector('.visualizador');
    visualizador.innerHTML = '';

    if(mensagens.length == 0) {
        var span = document.createElement('span');
        span.textContent = "Seu código aparecerá aqui! Selecione o texto e copie para seu código.";
        visualizador.appendChild(span);
    } else {
        mensagens.forEach(function(mensagem) {
        var span = document.createElement('span');
        visualizador.appendChild(span);
        span.textContent = mensagem;
        });
    }

}