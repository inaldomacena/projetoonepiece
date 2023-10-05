

/*
Objetivo 1 - Quando clicar no botão do personagem da lista, marcar o botao como selecionado

Passo 1 - Pegar os botoes no javascript para pode verificar quando o usuario clicar encima de um deles

Passo 2 -  Adicionar a classe "selecionado" no botao que o usuario clicou

Passo 3 - Verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele
**************************************************************************************************
Objetivo 2 - Quando clicar no botao do personagem mostrar as informações do personagem

Passo 1 - Pegar os personagens no javascript para poder mostrar ou esconder ele

Passo 2 -  Adicionar a classe "selecionado" no personagem que o usuario clicou

Passo 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele

*/

//Objetivo 1 e Passo 1


 const botoes = document.querySelectorAll(".botao")

 //Objetivo 2 Passo 1
 const personagens = document.querySelectorAll(".personagem")


 botoes.forEach((botao, indice) =>{

    botao.addEventListener("click",()=>{
        desselecionarBotao();
		desselecionarPersonagem();

        botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});


       function desselecionarPersonagem(){
        const personagemSelecionado = document.querySelector(".personagem.selecionado")
      personagemSelecionado.classList.remove("selecionado")
       }
        
      
       function desselecionarBotao(){
        const botaoSelecionado = document.querySelector(".botao.selecionado")
        botaoSelecionado.classList.remove("selecionado")

       }

    
      

       
    
 




 

 
