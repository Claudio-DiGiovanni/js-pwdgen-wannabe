let nome = prompt("inserisci nome")

let cognome = prompt("inserisci cognome")

let colore = prompt("inserisci colore preferito")

document.getElementById("nome").innerHTML = nome

document.getElementById("cognome").innerHTML = cognome

document.getElementById("colore").innerHTML = colore

document.getElementById("password").innerHTML = nome + cognome + colore + "22"
