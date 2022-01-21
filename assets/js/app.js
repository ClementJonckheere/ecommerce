
//articles dans un tableau
var myArray = [
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':49+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':39+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':51+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':41+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':27+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':29+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':34+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':60+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':17+ '€'},
    {'Article':'/assets/img/sac.jpg','Nom':'sac a dos noir', 'Prix':19+ '€'},
]

buidTable(myArray)

//creation du tableau avec les articles
function buidTable(data){
    let table = document.getElementById('productList')
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
        <td>${data[i].Article}</td>
        <td>${data[i].Nom}</td>
        <td>${data[i].Prix}</td>
        <td class="w-25 align-middle"><button class="btn btn-danger">Ajouter au panier</button></td>
        </tr>
        `
        table.innerHTML += row
        
    }
}


