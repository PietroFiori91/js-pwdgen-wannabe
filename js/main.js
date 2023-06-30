const firstName = prompt ("Inserisci il tuo nome");
const lastName = prompt ("Inserisci il tuo cognome");
const favColor = prompt ("Inserisci il tuo colore preferito");
const età = prompt ("Inserisci la tua età");

document.getElementById("nomegen").innerHTML=firstName;
document.getElementById("cognomegen").innerHTML=lastName;
document.getElementById("coloregen").innerHTML=favColor;
document.getElementById("agegen").innerHTML=età;

console.log (firstName, lastName, favColor, età);

const password = (`${firstName}${lastName}${favColor}${età}`);

document.getElementById("genpass").innerHTML=password;