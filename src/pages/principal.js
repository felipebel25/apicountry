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
        occupations.textContent= "Population:  " + number_format(data.population);

        const status = document.createElement('h3')
        status.textContent= "Region:  " +data.region;
       
        const nickname = document.createElement('h3')
        nickname.textContent= "Capital:  " +data.capital;

       const vermas = document.createElement('a');
       vermas.textContent= "Ver mas..."
       vermas.setAttribute('href', `/pais.html?name=${data.name}`);
        
           
        textos.append(name,occupations,status,nickname,vermas)
        div.append(img,textos)
      
        every.push(div)
     
    })
    app.append(...every)

}
const input = document.getElementById('inputpais')

export default Home;