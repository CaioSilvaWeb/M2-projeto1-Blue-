const imgUm = document.querySelector('#imgUm');
const legendaUm = document.querySelector('#legendaUm');
let btAvancar = document.querySelector('#btAvancar');

btAvancar.addEventListener("click", () => {
    if(btAvancar.value == 'um'){
        imgUm.src = "img/Escudo2.png";
        legendaUm.innerText = 'Inclusao de duas letras "S" referentes a "Societa Sportiva"';
        btAvancar.value = 'dois';
    }else if(btAvancar.value == 'dois'){
        imgUm.src = "img/Escudo3.png";
        legendaUm.innerText = 'Primeiro escudo do Cruzeiro';
        btAvancar.value = 'tres';
    }else if(btAvancar.value == 'tres'){
        imgUm.src = "img/Escudo4.png";
        legendaUm.innerText = '- Nome foi para dentro do escudo e por extenso e inversao do posicionamento das estrelas';
        btAvancar.value = 'quatro';
    }else if(btAvancar.value == 'quatro'){
        imgUm.src = "img/Escudo5.png";
        legendaUm.innerText = 'Inclusao de "Belo Horizonte" (provavelmente por participar da Taca Brasil), Mudança nas posicoes das estrelas';
        btAvancar.value = 'cinco';
    }else if(btAvancar.value == 'cinco'){
        imgUm.src = "img/Escudo6.png";
        legendaUm.innerText = 'Remocao de "Belo Horizonte" e alteracao da fonte das letras';
        btAvancar.value = 'seis';
    }else if(btAvancar.value == 'seis'){
        imgUm.src = "img/Escudo7.png";
        legendaUm.innerText = 'Inclusao do simbolo referente a Triplice Coroa de 2003';
        btAvancar.value = 'sete';
    }else if(btAvancar.value == 'sete'){
        imgUm.src = "img/Escudo8.png";
        legendaUm.innerText = 'Diminuicao de detalhes da coroa e mudancas nas letras e na tonalidade do azul';
        btAvancar.value = 'oito';
    }else{
        imgUm.src = "img/Escudo9.png";
        legendaUm.innerText = 'As principais alteracoes sao a utilização do escudo oficial sem a coroa e volta da cor primaria para um azul mais escuro. ';
        btAvancar.value = 'um';
    }
});