"use strict"
window.addEventListener("load", function(){
    var galeria_Lotus = document.querySelector("#galeria_Lotus");
    var galeria_Caterham = document.querySelector("#galeria_Caterham");
    var galeria_AMG = document.querySelector("#galeria_AMG");
    var galeria_Lamborghini = document.querySelector("#galeria_Lamborghini_Huracan");
    var galeria_Rennstrecke = document.querySelector("#galeria_Rennstrecke");
    var galeria_Volvo = document.querySelector("#galeria_Volvo");
    var i= 0;
    var next_Image=1;
    var galeria = document.createElement("div");
    galeria.style.fontSize = "100px";
    galeria.style.color = "white";
    galeria.style.backgroundColor = "black";
    galeria.style.position ="absolute";
    galeria.style.left = "0px";
    galeria.style.top = "0px";
    galeria.style.zIndex = "10";
    galeria.style.display = "flex";
    galeria.style.justifyContent = "center";
    galeria.style.alignItems = "center";
    galeria.style.padding = "100px";
    document.body.appendChild(galeria);
    galeria.style.display="none";
    var foto = document.createElement("img");
    var left = document.createElement("div");
    var right = document.createElement("div");
    var close = document.createElement("div");
    left.innerHTML="<";
    right.innerHTML=">";
    close.innerHTML="X";
    close.style.position = "relative";
    close.style.left = "100px";
    close.style.top = "-420px";
    close.style.fontSize= "40px";
    galeria.appendChild(left);
    galeria.appendChild(foto);
    galeria.appendChild(right);
    galeria.appendChild(close);
    
    //metemos en una constante llamada modelos los datos de nuestros vehiculos
    const modelos = [{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Lamborghini",
        "modelo": "Huracan",
        "foto1" : "/pictures/WEB_Lamborghini_Huracan_01.jpg",
        "foto2" : "/pictures/WEB_Lamborghini_Huracan_02.jpg",
        "foto3" : "/pictures/WEB_Lamborghini_Huracan_03.jpg"
    },{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    }];


    
    galeria_Lotus.addEventListener("click",function(){
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    });
    galeria_Lamborghini.addEventListener("click",function(){
        i=3;
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    });
    close.addEventListener("click",function(){
        galeria.style.display="none";
    });
    left.addEventListener("click",function(){
        if(next_Image>1){
            next_Image--;
        }else{
            next_Image=4;
        }
        switch(next_Image){
            case 1:
            foto.src = modelos[i].foto1;
            break;   
            case 2:
            foto.src = modelos[i].foto2;
            break;   
            case 3:
            foto.src = modelos[i].foto3;
            break;   
            case 4:
            foto.src = modelos[i].foto4;
            break;      
        }
        
    });
    right.addEventListener("click",function(){
        if(next_Image<4){
            next_Image++;
        }else{
            next_Image=1;
        }
        switch(next_Image){
            case 1:
            foto.src = modelos[i].foto1;
            break;   
            case 2:
            foto.src = modelos[i].foto2;
            break;   
            case 3:
            foto.src = modelos[i].foto3;
            break;   
            case 4:
            foto.src = modelos[i].foto4;
            break;        
        }
        
    });
})