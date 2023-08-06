const citacoes = [
     {
        'citacao':'Seja como for o que penses, creio que é melhor dizê-lo com boas palavras',
        'autor':'Willian Shakespeare'
     },
     {
        'citacao':'Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos.',
        'autor':'Maquiavel'
     },
     {
        'citacao':'Minha fé é no desconhecido, em tudo que não podemos compreender por meio da razão. Creio que o que está acima do nosso entendimento é apenas um fato em outras dimensões e que no reino do desconhecido há uma infinita reserva de poder.',
        'autor':'Charles Chaplin'
     },
     {
        'citacao':'Creio que a pessoa que teve mais experiência de privações consegue enfrentar problemas com mais firmeza que a pessoa que nunca passou por sofrimento. Portanto, visto por esse ângulo, um pouco de sofrimento pode ser uma boa lição para a vida.',
        'autor':'Dalai Lama'
     },
     {
        'citacao':'Creio que a importância do Evangelho de Jesus em nossa evolução espiritual é semelhante à importância do Sol na sustentação da nossa vida física.',
        'autor':'Chico Xavier'
     },
     {
        'citacao':'Creio que é melhor dizer a verdade do que mentir, saber do que ignorar, ser livre do que depender.',
        'autor':'H. L. Mencken'
     },
     {
        'citacao':'O medo faz parte da vida da gente. Algumas pessoas não sabem como enfrentá-lo, outras - acho que estou entre elas - aprendem a conviver com ele e o encaram não como uma coisa negativa, mas como um sentimento de autopreservação.',
        'autor':'Ayrton Senna'
     },
     {
        'citacao':'Eu posso não ter ido para onde eu pretendia ir, mas eu acho que acabei terminando onde eu pretendia estar.',
        'autor':'Douglas Adams'
     }
];

const btnElement = document.querySelector('.button');
const citacaoElement = document.querySelector('.text');
const autorElement = document.querySelector('.author');

function getCitacao(){
    const index = Math.floor(Math.random() * citacoes.length);

    citacaoElement.textContent = citacoes[index].citacao;
    autorElement.textContent = citacoes[index].autor;
    console.log(citacoes[index].citacao);
}

btnElement.addEventListener('click', ()=>{
    getCitacao();
    
})