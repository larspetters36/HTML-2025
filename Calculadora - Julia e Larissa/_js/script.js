let resultado = document.querySelector("#resultado");
let botoesPadrao = document.querySelectorAll(".botoesPadrao");
let botaoResultado = document.querySelector(".botaoResultado");
let apagarTudo = document.querySelector(".apagaTudo");
let apagarUm = document.querySelector(".apagaUm");

function cliques () {
    botoesPadrao.forEach((negocio) => {
        negocio.addEventListener('click', () => {
            let valor = negocio.dataset.valor;
            adicionarTexto(valor);
        });
});

}

botaoResultado.addEventListener('click', () => {
    calcular();
});

apagarTudo.addEventListener('click', () => {
    deletaTudo();
});

apagarUm.addEventListener('click', () => {
    deletaUm();
});



function adicionarTexto(numero){
    resultado.value += numero;
};

function calcular() {
    try {
        resultado.value = eval(resultado.value);
        let valor = eval(resultado.value);

        if (valor === 666) {
            document.body.style.backgroundImage = "url('_img/Henri-Diabo_com_Kian_preso.mp4')";
            document.body.style.backgroundPosition = "center";
        }
        else if (valor === 5) {
            document.body.style.backgroundImage = "url('_img/Elementos_do_Outro_Lado.png')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        }
        else {
            document.body.style.backgroundImage = "url('_img/Teaser_Hexatombe_-_Culto.jpg')";
        }
    } catch (error){
        alert("Algo deu errado, tente novamente.");
    };

};

function deletaTudo(){
    resultado.value = "";
};

function deletaUm (){
    if(Number(resultado.value)){
        resultado.value = resultado.value.slice(0, -1);
    };
};

cliques();