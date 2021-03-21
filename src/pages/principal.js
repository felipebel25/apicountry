import getData from "../utils/getData"


async function Home(url,clase){
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

       const vermas = document.createElement('a');
       vermas.textContent= "Ver mas..."
       vermas.setAttribute('href', '../dist/pais.html');
        
           
        textos.append(name,occupations,status,nickname,vermas)
        div.append(img,textos)
      
        every.push(div)
     
    })
    app.append(...every)

}


export default Home;