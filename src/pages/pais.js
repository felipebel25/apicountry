import '../styles/general.scss'

import Template from "../template/template";
import getData from "../utils/getData"

(async function App() {
    const main = null || document.getElementById('header');
    main.innerHTML = await Template();

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
     
        div.className = "content"
        
        const textos = document.createElement('div')
        textos.className = "textos";

        const name = document.createElement('h1')
        name.textContent= data.name;
        

        const occupations = document.createElement('h3')
        occupations.textContent= "Population:  " + data.population;

        const status = document.createElement('h3')
        status.textContent= "Region:  " +data.region;
       
        const nickname = document.createElement('h3')
        nickname.textContent= "Capital:  " +data.capital;

           
        const languages = document.createElement('h3')
        languages.textContent= "Languages:  " +data.currencies[0].symbol+ " " +data.currencies[0].name;

        const moneda = document.createElement('h3')
        moneda.textContent= "Moneda:  " + data.currencies[0].name;
        
           
        textos.append(name,occupations,status,nickname,languages)
        div.append(img,textos)
      
        every.push(div)
     
    })
    app.append(...every)

}



let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name")
console.log(name);

kaka(`name/${name}`,'.pais')
