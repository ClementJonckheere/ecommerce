//Afficher le panier

let modal = document.getElementById("myModal");
let btn = document.getElementById("btnshop");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
console.log(myArray)

//Affichage des produits dans le panier

let positionElement = document.querySelector(".modal-content");
 console.log(positionElement);

let ajouterElement = document.querySelector("td").lastChild;
     for (let i = 0; i < ajouterElement.length; i++) {
         ajouterElement.addEventListener('click', () =>{
             console.log(ajouterElement)
         })
     }
    
