/*Este eh meu nome
//var nome = "Renata";



Função Entrar
function entrar(){

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo :D';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;

    }

}

function entrar2(nome){

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome: ');
    area.innerHTML = nome + " " + texto;

}


WHILE = ENQUANTO
x = 0;

while(x<10){

    document.write("</br> O valor do X eh:" + x);
    x++;
}
x=5;
document.write("</br></br> O X esta valendo:" + x+ "</br></br>");

//FOR = PARA
for(a=0; a<5; a++){
    document.write("</br> O valor do A eh:" + a);

}

document.write("</br></br>Escolha seu pedido</br>");
document.write("</br>0 - Sorvete / 1 - Suco</br>");
document.write("</br>2 - Fanta Laranja / 3 - Agua</br></br>");


//SWITCH

function pedir(){
    x=prompt("O que deseja pedir?");
    switch(x){

    case "0":
        alert("Voce pediu sorvete!");
        break;

    case "1": 
        alert("Voce pediu suco!");
        break;

    case "2": 
        alert("Voce pediu Fanta Laranja!");
    break;

    case "3": 
        alert("Voce pediu agua!");
    break;
    default:
        alert("Opcao invalida");
        break;
    }
    
}


function apertoumouse(){
    console.log("O mouse foi apertado!");
}

function solteimouse(){
    console.log("Soltou o botao do mouse");
}

function passoumouse(){
    console.log("Voce passou o mouse no botao");
}

function tiroumouse(){
    console.log("Voce tirou o mouse do botao");
}

function movendomouse(){
    console.log("Voce esta mexendo sobre o botao");
}

function onClick(){
    console.log("Voce clicou no botao");
}

function botaodireito(){
    console.log("Voce clicou com o botao direito do mouse");
    return false;
}

function tecladoApertado(event){
    console.log("Teclado Apertado " +event.shiftKey);

    if(event.keyCode == 13){
        console.log('Voce apertou o enter!');
    }
} 

function carregou(){
    alert('Pagina foi carregada');
}

function focado(){
    console.log('Campo focado');
}

function desfocado(){
    console.log('Campo desfocado');
}

function opcaoSelecionada(objeto){
    console.log('Cidade Selecionada: '+objeto.value);

}
*/

//CRIANDO JOGO BALÃO
//1- Cria o balão
//2 - Estoura o balao
//3- Carregar o JOGO

var total = 0;

function criarBalao(){

    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600); 
    var y = Math.floor(Math.random() * 400); 

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(objeto){
    document.body.removeChild(objeto);
    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Baloes estourados: "+ total;

}

function carregarJogo(){
    setInterval(criarBalao,1000);
}

