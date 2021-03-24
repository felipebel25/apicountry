import Home from "./principal";
import Template from "../template/template";

(async function App() {
    const main = null || document.getElementById('header');
    main.innerHTML = await Template();

})();


let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name")
console.log(name);

Home(`name/${name}`,'.app')
