"use strict"
window.addEventListener("load", function(){
    var galeria_lotus = document.querySelector("#galeria_Lotus");
    const Lotus = [
                    "/pictures/WEB_Lotus_Esprit_01.jpg",
                    "/pictures/WEB_Lotus_Esprit_02.jpg",
                    "/pictures/WEB_Lotus_Esprit_03.jpg",
                    "/pictures/WEB_Lotus_Esprit_04.jpg"
                    ];
    
    galeria_lotus.addEventListener("click",function(){
        const galeria = document.createElement("div");
        // galeria.innerHTML = "PRUEBA";
        galeria.style.fontSize = "500px";
        galeria.style.color = "red";
        galeria.style.backgroundColor = "black";
        galeria.style.position ="absolute";
        galeria.style.left = "0px";
        galeria.style.top = "0px";
        galeria.style.zIndex = "10";
        galeria.style.display = "flex";
        galeria.style.justifyContent = "center";
        galeria.style.padding = "100px";
        document.body.appendChild(galeria);
        const foto = document.createElement("img");
        galeria.appendChild(foto);
        foto.src = "/pictures/WEB_Lotus_Esprit_01.jpg";
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        
        
        
    });

})