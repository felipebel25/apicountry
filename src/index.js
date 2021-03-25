import "./styles/general.scss";
import Template from "./template/template";
import Home from "./pages/principal";
import filtro from "./components/filtrar";
import inbut from "./template/input.js";



(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
    filtro('africa');
    filtro('europe');
    filtro('americas');
    filtro('asia');
    filtro('oceania');
    
    const input = document.getElementById('inputpais')
    input.addEventListener("change", (evento)=>{
       let relleno = event.target.value;
       const app = document.querySelector(".app" || ".pais")
       function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        }
        removeAllChildNodes(app)
       Home(`name/${relleno}`, '.app')
       console.log(relleno)
    })  
    console.log(input)
    
})();

Home(`alpha?codes=deu;usa;br;af;ax;al;dz`,'.app')

