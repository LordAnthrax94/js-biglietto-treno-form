const nome = document.getElementById('name')
const chilometri = document.getElementById('inschilometri');
const eta = document.getElementById('inputGroupSelect01');
const btngenera = document.getElementById('genera')
const btnannulla = document.getElementById('annulla')
const biglietto = document.querySelector('biglietto')
const prezzomin = 0.21 ;

const maggioreta = document.getElementById('maggiorenne');
const over = document.getElementById('over');
const minorenne = document.getElementById('minore')

const valuta = 'Euro';
const form = document.querySelector('nonform')

form.addEventListener ('submit', (event) => {
  event.preventDefault();
});



const insnome = nome.value;
const inschilometri = chilometri.value;
const inseta = eta.value;


let totale = (inschilometri * prezzomin);
// console.log(totale + ' ' + valuta);

let scontoMin = (totale * 20) / 100
let scontoOver = (totale * 40) / 100

let prezzoscontMin = (totale - scontoMin); 
let prezzoscontOver = (totale - scontoOver); 

 if(eta == minorenne){
  
 console.log(prezzoscontMin.toFixed(2) + ' ' + valuta);

 } else if(eta == over){

   console.log(prezzoscontOver.toFixed(2) + ' ' + valuta);

 } else{
   console.log(totale.toFixed(2) + ' ' + valuta);
 }



btngenera.addEventListener ('click', () =>{
  biglietto.classList.remove('d-hide');
  
    
})













btnannulla.addEventListener ('click', () =>{
  biglietto.classList.add('d-hide');  
})