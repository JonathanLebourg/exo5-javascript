
// on demande les nombres

var firstNumber = prompt('Premier nombre ?');
var secondNumber = prompt('Deuxieme nombre ?');

// on calcule le produit et on l'affiche

var result = parseInt(firstNumber) * secondNumber;


if (isNaN(firstNumber)||isNaN(secondNumber)) {
		alert('problème de saisie')}
else(alert("Le produit de ces deux nombres est " + result));
