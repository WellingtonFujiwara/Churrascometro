//Carne 400gr por pessoa + 6hrs 650gr
//Cerveja 1200ml por pessoa + 6hrs 2000ml 
//Refrigerante/água 1000ml por pessoa + 6hrs 1500ml

//Crianças valem por metade

//Pegando elementos HTML através da árvore DOM
let inputAdultos = document.getElementById ('adultos');
let inputCriancas = document.getElementById ('criancas');
let inputDuracao = document.getElementById ('duracao');

let resultado = document.getElementById('resultado');

//Função calcular do elemento button com evento onClick
function calcular(){
    console.log('calculando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao))/2;
    console.log(qtdTotalCarne);
    let qtdTotalCerveja = adultos * cervejaPP(duracao);
    console.log(qtdTotalCerveja);
    let qtdTotalBebida = adultos * bebidaPP(duracao) + (criancas * bebidaPP(duracao))/2;
    console.log(qtdTotalBebida);

    //Usar += para a linha posterior não subscrever a anterior
    //Retorno na tela com .innerHTML
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Pets 2L de Refrigerante ou água</p>`
} 

//Funções para cálculo de quantidade de carne, cerveja e bebidas, dependente da duração da festa
function carnePP(duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}



 