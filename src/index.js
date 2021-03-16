import "./styles/general.scss";
import Template from "./components/template";
import fetchData from "./components/principal";
import filtro from "./components/filtrar";

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
    filtro('africa');
    filtro('europe');
    filtro('americas');
    filtro('asia');
    filtro('oceania');

    
  })();


fetchData('https://restcountries.eu/rest/v2/alpha?codes=deu;usa;br;isl;af;ax;al;dz','.app')
