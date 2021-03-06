
const Template = async () => {
    
    const header =` 
    <header class="header">
        <a href="./index.html"> <h1 class="header__h1"> Where in the world?</h1> </a>

        <div class="dark-mode">
        <svg class="header__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>switch</title>
        <path d="M20 4.581v4.249c1.131 0.494 2.172 1.2 3.071 2.099 1.889 1.889 2.929 4.4 2.929 7.071s-1.040 5.182-2.929 7.071c-1.889 1.889-4.4 2.929-7.071 2.929s-5.182-1.040-7.071-2.929c-1.889-1.889-2.929-4.4-2.929-7.071s1.040-5.182 2.929-7.071c0.899-0.899 1.94-1.606 3.071-2.099v-4.249c-5.783 1.721-10 7.077-10 13.419 0 7.732 6.268 14 14 14s14-6.268 14-14c0-6.342-4.217-11.698-10-13.419zM14 0h4v16h-4z"></path>

        </svg>
        <span class="header__span">Dark Mode</span>
    </div>
        </header>
        <div class="filter--container">
            <div class= "filter--container__input">
                <input type="text" id="inputpais" placeholder="Busca un pais">
            </div>

            <div class="filter--container__region">
            <span class="filter__span">Filter by Region </span>
            <div class="filter--container__buton">
                <button id="africa" class="region__button">Africa</button>
                <button id="americas" class="region__button">America</button>
                <button id="europe" class="region__container__button">europe</button>
                <button id="asia" class="region__container__button">Asia</button>
                <button id="oceania" class="region__button">oceania</button>
            </div>
            </div>
            </div>
            

    `
    ;
    return header;

        
    
    
};


export default Template;