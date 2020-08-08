//declarar o objeto
const bolinha = document.getElementById("bolinha");
bolinha.style = "margin-top: 255px; margin-left:239px;";//239

 

//DEFININDO LIMITES
const baixo = 255;
const baixodireita = 460;
const baixoesquerda = 30;
const cima = 100;
const cimadireita = 380;
const cimaesquerda = 110;
const direita = 490;
const esquerda = 5;

 

//variáveis para os eixos
var positionv = 255;
var positionh = 239;

 

//DIRECIONAMENTO
var directionh = 0;// 0 para frente, 1 para trás
var directionv = 0;// 0 para cima, 1 para baixo

 

function anda(){
    setInterval(function(){//começa a função de animação
        //percorrer reta de largada
        if(        
            directionh == 0 &&
             positionv >= 255 &&
             positionh < baixodireita
             ){

 

            positionh += 5;
        } //fim da reta de largada
        else if( //primeiracurva
                directionh == 0 &&
                positionv > 200 && 
                positionh >= baixodireita &&
                positionh <= direita
                ){
            positionh +=5;
            positionv -=5;

 

            if(positionh>=direita){ //ao cehgar no meio da curva
            directionh = 1;
            }//passa a andar para trás (ESQUERDA)
        
        } //fim da primeira curva primeiracurva
        else if( //segunda reta
                directionh === 1 &&
                positionh >= cimadireita &&
                positionv >= cima
            ){

 

            positionv -= 7;
            positionh -= 5.5;
        } // fim da segunda reta
        else if( //reta oposta
                directionh === 1 &&
                positionh >= cimaesquerda
                ){
            positionh -= 5;
        } //fim da reta oposta
        else if(//ultima reta
                directionh === 1 &&
                positionh <= cimaesquerda &&
                positionh >= esquerda                        
               ){
            positionh -= 7;
            positionv += 8;

 

            if(positionh <= esquerda){//terminando a curva voltar para frente
                directionh = 0;
            }
        } //fim da ultima reta
        else{
            positionh += 5;
            positionv += 5;

 

        }
                

 

        bolinha.style = "margin-top:"+positionv+"px;"+
                        "margin-left:"+positionh+"px;";

 

    }/*termina função de animação*/,100);
}