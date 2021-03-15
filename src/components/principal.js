


async function fetchData(url,clase){
    const app = document.querySelector(clase)
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


export default fetchData;