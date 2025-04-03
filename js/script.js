const mensagem = document.getElementById('mensagem');

const botao = document.getElementById('meuBotao');

const evento = document.getElementById('evento');

botao.addEventListener('click',imprimir);

botao.addEventListener('mouseover',function(){
    evento.innerHTML = alert ("⚠ VOCÊ FOI HACKEADO! ⚠ Todos os seus dados estão sob nosso controle. Não tente desligar seu dispositivo ou poderá perder tudo. Se quiser recuperar o acesso, siga nossas instruções.");
    }
);

botao.addEventListener('mouseout',
    function(){
        evento.innerHTML = alert ("zuera meu fi");
    }
);

function imprimir(){
    evento.innerHTML = alert ("Você acaba de perder seus dados bancários");
}