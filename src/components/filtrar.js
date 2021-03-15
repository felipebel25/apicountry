import fetchData from "./principal.js";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
async function filtro(reg){
    
    const menu = document.getElementById(`${reg}`);
    menu.addEventListener('click', ()=>{
        if(reg === "africa"){
            
            
            if(document.querySelector(".app") === false){
              console.log("gola")

            }else {
                if(document.querySelector(".app")){
                const div= document.querySelector(".app");
                
                
                
                removeAllChildNodes(div)
                
            }
         
            }    
            if(document.querySelector(".americas") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".americas")){
                  const am= document.querySelector(".americas");
                  
                  removeAllChildNodes(am)
                  
              }
            }
            if(document.querySelector(".europe") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".europe")){

                  const eu= document.querySelector(".europe");
                  removeAllChildNodes(eu)
                
                  
              }
            }    
            if(document.querySelector(".asia") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".asia")){
                  const as= document.querySelector(".asia");
                  removeAllChildNodes(as)
                  
                  
              }
            }  
            if(document.querySelector(".oceania") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".oceania")){
                  const oc= document.querySelector(".oceania");
                  removeAllChildNodes(oc)
                  
                  
              }
            }  

            
        }
        if(reg === "americas"){

             
            if(document.querySelector(".app") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".app")){
                  const div= document.querySelector(".app");
                  removeAllChildNodes(div)
                  
              }
            }
              if(document.querySelector(".africa") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".africa")){
                  const af= document.querySelector(".africa");
                  removeAllChildNodes(af)
                  
                  
              }
              }
                
              
              if(document.querySelector(".europe") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".europe")){
                    const eu= document.querySelector(".europe");
                    removeAllChildNodes(eu)
                    
                    
                }
              }    
              if(document.querySelector(".asia") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".asia")){
                    const as= document.querySelector(".asia");
                    removeAllChildNodes(as)
                    
                    
                }
              }  
              if(document.querySelector(".oceania") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".oceania")){
                    const oc= document.querySelector(".oceania");
                    removeAllChildNodes(oc)
                   
                    
                }
              }  
        }
        if(reg === "europe"){

            if(document.querySelector(".app") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".app")){
                  const div= document.querySelector(".app");
                  removeAllChildNodes(div)
                  
                  
              }
           
              } 
              if(document.querySelector(".africa") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".africa")){
                  const af= document.querySelector(".africa");
                  removeAllChildNodes(af)
                  
                  
              }
              }   
              if(document.querySelector(".americas") === false){
                console.log("gola")
  
              }else {
                  if(document.querySelector(".americas")){
                  const am= document.querySelector(".americas");
                  removeAllChildNodes(am)
                 
                  
              }
            }
              
              if(document.querySelector(".europe") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".europe")){
                    const eu= document.querySelector(".europe");
                    removeAllChildNodes(eu)
                    
                    
                }
              }    
              if(document.querySelector(".asia") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".asia")){
                    const as= document.querySelector(".asia");
                    removeAllChildNodes(as)
                    
                    
                }
              }  
              if(document.querySelector(".oceania") === false){
                  console.log("gola")
    
                }else {
                    if(document.querySelector(".oceania")){
                    const oc= document.querySelector(".oceania");
                    removeAllChildNodes(oc)
                    
                    
                }
              }  
        }
        if(reg === "asia"){

          if(document.querySelector(".app") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".app")){
              const div= document.querySelector(".app");
              removeAllChildNodes(div)
              
              
          }
       
          } 
          if(document.querySelector(".africa") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".africa")){
              const af= document.querySelector(".africa");
              removeAllChildNodes(af)
              
              
          }
          }   
          if(document.querySelector(".americas") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".americas")){
              const am= document.querySelector(".americas");
              removeAllChildNodes(am)
             
              
          }
        }
          
          if(document.querySelector(".europe") === false){
              console.log("gola")

            }else {
                if(document.querySelector(".europe")){
                const eu= document.querySelector(".europe");
                removeAllChildNodes(eu)
                
                
            }
          }    
          
          if(document.querySelector(".oceania") === false){
              console.log("gola")

            }else {
                if(document.querySelector(".oceania")){
                const oc= document.querySelector(".oceania");
                removeAllChildNodes(oc)
                
                
            }
          }
        }
        if(reg === "oceania"){

          if(document.querySelector(".app") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".app")){
              const div= document.querySelector(".app");
              removeAllChildNodes(div)
              
              
          }
       
          } 
          if(document.querySelector(".africa") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".africa")){
              const af= document.querySelector(".africa");
              removeAllChildNodes(af)
              
              
          }
          }   
          if(document.querySelector(".americas") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".americas")){
              const am= document.querySelector(".americas");
              removeAllChildNodes(am)
             
              
          }
        }
          
          if(document.querySelector(".europe") === false){
              console.log("gola")

            }else {
                if(document.querySelector(".europe")){
                const eu= document.querySelector(".europe");
                removeAllChildNodes(eu)
                
                
            }
          }
          if(document.querySelector(".asia") === false){
            console.log("gola")

          }else {
              if(document.querySelector(".asia")){
              const as= document.querySelector(".asia");
              removeAllChildNodes(as)
              
              
          }
        }     
          
          
            
        }
      fetchData(`https://restcountries.eu/rest/v2/region/${reg}`,`.${reg}`)

     
    })
}

export default filtro;