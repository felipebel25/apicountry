import "./styles/globales.scss";
import Template from "./components/template";

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
   
  })();

const url = 'https://restcountries.eu/rest/v2/alpha?codes=deu;usa;br;isl;af;ax;al;dz'
const app = document.querySelector('.app')

async function fetchData(){
    const response = await fetch(url);  
    const data = await response.json()
    

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

       
        
           
        textos.append(name,occupations,status,nickname)
        div.append(img,textos)
      
        every.push(div)
     
    })
    app.append(...every)

}

// const muerto = document.getElementById("episodios")
// muerto.addEventListener("click", ()=>{
//     console.log("hola soy muerto")
// })


fetchData()