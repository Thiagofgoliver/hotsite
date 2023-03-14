// elemento fechar e oferta


/* PARA FAZER TESTE 


alert('hello word')



var num = 12

var raiz = Math.sqrt(num)


forma certa de fazer teste em console



floor serve para arrendondar numeros
para calcular a raiz

console.log(raiz)
para arredondar a raiz
console.log (Math.round (raiz))

para arredondar casas decimais
console.log(Number(raiz.toFixed(2)) + 4) */







//elemento fechar

//selecionar por nome   var bTFechar = document.getElementById('btFechar') 


var btFechar = document.querySelector('.popup .fechar')
var oferta = document.getElementById('oferta')
//evento click no elemento fechar 


btFechar.addEventListener ('click', ()=>{
  
//alteração de csss em tempo real 

oferta.style.display = 'none'

})



