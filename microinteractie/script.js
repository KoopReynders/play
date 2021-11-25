
/*
0: queryselector om de button en de header te kunnen gebruiken in js
1: click op de button
2: met classlist toggle de class "show-search" op de header zetten
*/

//0: queryselector om de button en de header te kunnen gebruiken in js
var deButton = document.querySelector("header > button")
var deHeader = document.querySelector("header")

//1: click op de button om een functie uit te voeren
deButton.addEventListener("click",doiets);

//2: met classlist toggle de class "show-search" op de header zetten
function doiets(){
    deHeader.classList.toggle("show-search");


    // if(deHeader.classList.contains("show-search")){
    //     deHeader.classList.remove("show-search");
    // }else{
    //     deHeader.classList.add("show-search");
    // }
  
}