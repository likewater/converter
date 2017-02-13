
/*tsp to tbsp
cup to tsp
cup to tbsp
cup to floz
cup to ml
ml to tsp
l to cup
cup to gal*/


var tspToTbsp = function(teaspoons) {
  return teaspoons * 3;
}
/*
var cupToTsp = function(cups) {
  return cups / 15.99;
}

var literToCup = function(liters) {
  return liters / 4.22;
}

var cups = parseFloat(prompt("How many cups?"));
var liters = parseFloat(prompt("How many liters?"));
*/
var teaspoons = parseFloat(prompt("How many teaspoons?"));

var teaspoonsToTablespoons = tspToTbsp(teaspoons);
/*
var cupsToTeaspoons = cupToTsp(cups);
var litersToCups = literToCup(liters);
*/
alert("That is: " + teaspoonsToTablespoons);
