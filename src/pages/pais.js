import '../styles/paisgeneral.scss'
import Home from "../pages/principal";

import Template from "../template/template";
import getData from "../utils/getData"
function number_format(amount, decimals) {

    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

    return amount_parts.join('.');
}

(async function App() {
    const main = null || document.getElementById('header');
    main.innerHTML = await Template();
    
    const input = document.getElementById('inputpais')
    input.addEventListener("change", (evento)=>{
       let relleno = event.target.value;
       const app = document.querySelector(".paises")
       function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        }
        removeAllChildNodes(app)
       Home(`name/${relleno}`, '.paises')
       console.log(relleno)
    })  
    console.log(input)

})();
async function kaka(url,clase){
    const app = document.querySelector(clase)

    const data = await getData(url);
    

    const every=[]
    data.forEach(data => {
        const div = document.createElement('div')
        
        const img = document.createElement('img')
        img.loading = 'lazy';
        img.src = data.flag;
        img.className = "paises--pais__img";
     
        div.className = "paises--pais"
        
        const textos = document.createElement('div')
        textos.className = "paises--pais__textos";

        const textos2 = document.createElement('div')
        textos2.className = "paises--pais__textos2";

        const name = document.createElement('h1')
        name.textContent= `${data.name}`;

        const cioc = document.createElement('h3')
        cioc.textContent= data.cioc;

        const nativename = document.createElement('h3')
        nativename.textContent= "Native Name:  " + data.altSpellings[1];
        
        const population = document.createElement('h3')
        population.textContent= "Population:  " + number_format(data.population);

        const subregion = document.createElement('h3')
        subregion.textContent= "Sub Region:  " + data.subregion;

        const region = document.createElement('h3')
        region.textContent= "Region:  " +data.region;
        
       
        const nickname = document.createElement('h3')
        nickname.textContent= "Capital:  " +data.capital;

           
        const languages = document.createElement('h2')
        languages.textContent= "Languages: " + data.languages[0].name ;

        const topleve = document.createElement('h2')
        topleve.textContent= "TopLevelDomain: " + data.topLevelDomain[0];

        const moneda = document.createElement('h2')
        moneda.textContent= "Moneda:  "  +data.currencies[0].symbol+ " " +data.currencies[0].name;
        
        textos2.append(languages,topleve,moneda)   
        textos.append(name,nativename,population,region,subregion,nickname)
        div.append(img,textos,textos2)
      
        every.push(div)
        
     
    })
    app.append(...every)

}



let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name")
console.log(name);

kaka(`name/${name}`,'.paises--pais')


