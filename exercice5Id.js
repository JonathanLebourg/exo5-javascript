function calcul (){
//definition des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var numbers= firstNumber + secondNumber
var result = parseInt(firstNumber) * secondNumber;
//que les chiffres
var regex= /^[0-9]+$/;

if (!regex.test(numbers)||numbers==null){
    alert("Problème de saisie");}
else{
alert("Le produit de ces deux nombres est " + result);}
}
