const form = document.getElementById('nonform')
const nome = document.getElementById('name')
const chilometri = document.getElementById('inschilometri');
const eta = document.getElementById('inputGroupSelect01');
const btngenera = document.getElementById('genera')
const btnannulla = document.getElementById('annulla')
const bigliettostamp = document.getElementById('biglietto')
const prezzomin = 0.21 ;

const maggioreta = document.getElementById('maggiorenne');
const over = document.getElementById('over');
const minorenne = document.getElementById('minore')

const valuta = 'Euro';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
});



btngenera.addEventListener ('click', () =>{
  bigliettostamp.classList.remove('d-hide');
  
  const insnome = nome.value;
  const inschilometri = chilometri.value;
  const inseta = eta.value;


 let totale = (inschilometri * prezzomin);
 

 let scontoMin = (totale * 20) / 100
 let scontoOver = (totale * 40) / 100

 let prezzoscontMin = (totale - scontoMin); 
 let prezzoscontOver = (totale - scontoOver); 

  if(inseta == 1){
  
 console.log(prezzoscontMin.toFixed(2) + ' ' + valuta);

  } else if(inseta == 3){

    console.log(prezzoscontOver.toFixed(2) + ' ' + valuta);

  } else{
    console.log(totale.toFixed(2) + ' ' + valuta);
  }
  //console.log(totale + ' ' + valuta);
  document.getElementById('Nome-passeggero').innerHTML = insnome;
  document.getElementById('scontistica').innerHTML = inseta;
  document.getElementById('chilometri-percorsi').innerHTML = inschilometri;
  document.getElementById('prezzo-finale').innerHTML = totale.toFixed(2);
})




btnannulla.addEventListener ('click', () =>{
  biglietto.classList.add('d-hide');  
})


function resetvalue(){
  
}