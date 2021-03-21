import "./styles/general.scss";
import Template from "./template/template";
import Home from "./pages/principal";
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


Home(`alpha?codes=deu;usa;br;af;ax;al;dz`,'.app')
