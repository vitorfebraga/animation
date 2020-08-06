	var urso = document.getElementById("img-bolinha");

	var bolinha = [
		'bolinha1.png',	//0
		'bolinha1.png'		//1
	]

	var quadro = 0;  	//index de quadros

	function roda(){
		setTimeout(animar,3000);// comandos, tempo em milesegundos
		//setTimeout -> faz uma contagem regressiva para executar um comando
	}

var position = 227;
	var positionv = 233;
	var positiontrás=480;
	//var position=480;
	//var positionv =207;
	urso.style = "margin-top:"+positionv+"px; margin-left:"+position+"px;margin-right:"+positiontrás+"px;";		
	var direction = 0; // 0 FRENTE, 1 TRÁS

	function animar(){
		
		timer = window.setInterval(function(){ //executa os comandos a cada intervalo
			//ANIMA O URSO - TROCA DE QUADROS
			urso.src = bolinha[quadro];
			quadro++;
			if(quadro > 1){
				quadro = 0;
			};//FIM ANIMA URSO

			

			//MOVIMENTA O URSO
			var largura = 498-45;//guardei a largura disponível
			
      
			if (direction == 0 && position<largura){
				position += 5;
			}
		
    else if (direction == 0  && largura==453  ){
			position += 5; //margin-left
			positionv -= 4;//margin-top
		} 
		else if( direction==1 &&  largura==498){
			position-=5;
		
		}
		

		document.getElementById("img-bolinha").style = "margin-top:"+positionv
                                        +"px; margin-left:"+position+"px";
			
																				
		/*	var direction= 0;																	
			if (direction === 0 && position<largura){
				position += 9; //margin-left
				positionv -= 4;//margin-top
			} 

			urso.style = "margin-top:"+positionv
						+"px; margin-left:"+position+"px;";
						*/
     
			}, 200);
		}		
		

		

	function paraurso(){
		clearInterval(timer); //clearTimeout(variavel do timer)
		document.getElementById("img-urso").src = "urso1.png";
	}	
	//faça o urso andar até o final da janela e voltar de moonwalker



	//declaração de variáveis em JS
	/*
	variavel; //sem declaração de escopo a variável é criada no escopo GLOBAL
	let seila; //variável de escopo

	for(let i = 0; i < 10 ; i++){
		variavel2;
	}

	var outraVariavel;

	let seila = 0;

	var outraVariavel = 1;

	var variavel2;

	outravariavel = 2;

	"sair" == "SAIR" true
	"sair" != "SAIR" false
	"sair" === "SAIR" false
	"sair" !== "SAIR" true
	0 == "0" true
	0 === "0" false
	"a" == 'a' true
	"a" === 'a' false
	!= !==

	*/