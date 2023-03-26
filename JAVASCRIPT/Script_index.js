"use strict"
window.addEventListener("load", function(){
    //Generamos todas las variables generales que vamos a necesitar para la galeria de la seccion index/portfolio
    var galeria_Lotus = document.querySelector("#galeria_Lotus");
    var galeria_Caterham = document.querySelector("#galeria_Caterham_S3_gold");
    var galeria_AMG = document.querySelector("#galeria_AMG");
    var galeria_Lamborghini = document.querySelector("#galeria_Lamborghini_Huracan");
    var galeria_Rennstrecke = document.querySelector("#galeria_Rennstrecke");
    var galeria_Volvo = document.querySelector("#galeria_Volvo_P1800");
    var header = document.querySelector("#header");
    var i= 0;
    var next_Image=1;
    var contador_elementos_obeto_JSON=0;//Esta variable nos sirve para adaptar la galeria a que unos albumes  
                                        //tengan mas o menos fotos que otros
    var galeria = document.createElement("div"); //Creamos la galeria general en la cual se cargara un album u otro
    
    //Incluimos el div galeria dentro del body HTML y editamos todas las caracteristicas de la galeria
    document.body.appendChild(galeria);
    galeria.style.fontSize = "40px";
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
    galeria.style.display="none";

    //Creamos los elementos necesarios para el visor de la galeria, los metemnos en galeria y los editamos
    var foto = document.createElement("img");
    var left = document.createElement("div");
    var right = document.createElement("div");
    var close = document.createElement("div");
    galeria.appendChild(left);
    galeria.appendChild(foto);
    galeria.appendChild(right);
    galeria.appendChild(close);
    foto.style.paddingLeft= "50px";
    foto.style.paddingRight= "50px";    
    left.innerHTML="◀";
    left.style.cursor= "none";
    right.innerHTML="▶";
    right.style.cursor= "none";
    close.innerHTML="╳";
    close.style.cursor= "none";
    close.style.position = "relative";
    close.style.left = "100px";
    close.style.top = "-420px";
    close.style.fontSize= "30px";    
    
    //Creamos en una constante llamada modelos los datos de nuestros vehiculos
    const modelos = [{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Caterham",
        "modelo": "S3",
        "foto1" : "/pictures/WEB_Caterham_S3_black_gold_01.jpg",
        "foto2" : "/pictures/WEB_Caterham_S3_black_gold_02.jpg",
        "foto3" : "/pictures/WEB_Caterham_S3_black_gold_03.jpg"
    },{
        "marca": "Mercedes",
        "modelo": "C63 S AMG",
        "foto1" : "/pictures/WEB_AMG_C63_S_01.jpg",
        "foto2" : "/pictures/WEB_AMG_C63_S_02.jpg"
    },{
        "marca": "Lamborghini",
        "modelo": "Huracan",
        "foto1" : "/pictures/WEB_Lamborghini_Huracan_01.jpg",
        "foto2" : "/pictures/WEB_Lamborghini_Huracan_02.jpg",
        "foto3" : "/pictures/WEB_Lamborghini_Huracan_03.jpg",
        "foto4" : "/pictures/WEB_Lamborghini_Huracan_04.jpg"
    },{
        "marca": "Lotus",
        "modelo": "Esprit",
        "foto1" : "/pictures/WEB_Lotus_Esprit_01.jpg",
        "foto2" : "/pictures/WEB_Lotus_Esprit_02.jpg",
        "foto3" : "/pictures/WEB_Lotus_Esprit_03.jpg",
        "foto4" : "/pictures/WEB_Lotus_Esprit_04.jpg"
    },{
        "marca": "Volvo",
        "modelo": "P1800",
        "foto1" : "/pictures/WEB_Volvo_P1800_01.jpg",
        "foto2" : "/pictures/WEB_Volvo_P1800_02.jpg",
        "foto3" : "/pictures/WEB_Volvo_P1800_03.jpg",
        "foto4" : "/pictures/WEB_Volvo_P1800_04.jpg",
        "foto5" : "/pictures/WEB_Volvo_P1800_05.jpg"
    }];


    //Creamos los eventos para abrir en la galeria un album u otro segun se clique en una foto u otra del portfolio
    galeria_Lotus.addEventListener("click",function(){
        i=0;
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        header.style.width= "70%";//se consigue esconder el header para que no se vea feo si el usuario hace scroll
        contador_elementos_obeto_JSON = Object.keys(modelos[i]).length;        
    });
    galeria_Caterham.addEventListener("click",function(){
        i=1;
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        header.style.width= "70%";//se consigue esconder el header para que no se vea feo si el usuario hace scroll
        contador_elementos_obeto_JSON = Object.keys(modelos[i]).length;
        
    });
    galeria_AMG.addEventListener("click",function(){
        i=2;
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        header.style.width= "70%";//se consigue esconder el header para que no se vea feo si el usuario hace scroll
        contador_elementos_obeto_JSON = Object.keys(modelos[i]).length;        
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
        header.style.width= "70%";
        contador_elementos_obeto_JSON = Object.keys(modelos[i]).length;
    });
    galeria_Volvo.addEventListener("click",function(){
        i=5;
        galeria.style.display="flex";
        foto.src = modelos[i].foto1;
        foto.style.width = "80%"
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        header.style.width= "70%";
        contador_elementos_obeto_JSON = Object.keys(modelos[i]).length;
        
    });
    



    close.addEventListener("click",function(){
        galeria.style.display="none";
        window.scroll({//Se mueve el scroll para que al cerrar la web te lleve justo abajo del header y ver los albumes
            top: 1120,
            left: 0,
            behavior: 'smooth'
          })
          header.style.width= "100%";//se activa de nuevo el header al 100% de su tamaño
    });
    left.addEventListener("click",function(){
        if(next_Image>1){
            next_Image--;
        }else{
            next_Image=(contador_elementos_obeto_JSON-2);
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
        
        if(next_Image<(contador_elementos_obeto_JSON-2)){
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
            case 5:
            foto.src = modelos[i].foto5;
            break;        
        }
        
    });
    right.onmouseover = function(){
        right.style.color= "rgb(116, 116, 116)";
    };
    right.onmouseout = function(){
        right.style.color= "white";
    };
    left.onmouseover = function(){
        left.style.color= "rgb(116, 116, 116)";
    };
    left.onmouseout = function(){
        left.style.color= "white";
    };
    close.onmouseover = function(){
       close.style.color= "rgb(116, 116, 116)";
    };
    close.onmouseout = function(){
        close.style.color= "white";
    };
})