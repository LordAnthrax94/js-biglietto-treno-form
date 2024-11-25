const chilometri = document.getElementById('inputGroup-sizing-sm');
const eta = document.getElementById('inputGroupSelect01');
const btngenera = document.getElementById('genera')
const btnannulla = document.getElementById('annulla')
const biglietto = document.querySelector('biglietto')
const prezzomin = 0.21 ;

const valuta = 'Euro';

let totale = (chilometri * prezzomin);
// console.log(totale + ' ' + valuta);
const maggioreta = document.getElementById('maggiorenne');
const over = document.getElementById('over');
const minorenne = document.getElementById('minore')

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