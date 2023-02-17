"use strict"
window.addEventListener("load", function(){
   
    
    //Se guardan los elemento IMGs en una variables correspondientes 
    var edicion_01_original = document.querySelector("#edicion_01_original");
    var edicion_02_original = document.querySelector("#edicion_02_original");
    var edicion_03_original = document.querySelector("#edicion_03_original");
    var edicion_04_original = document.querySelector("#edicion_04_original");
    //Se ponen las funciones onmouseover y onmouseout para cada imagen
    edicion_01_original.onmouseover = function(){
        edicion_01_original.src="/pictures/WEB_retouching_IMG_0346_edited.jpg";
    };
    edicion_01_original.onmouseout = function(){
        edicion_01_original.src="/pictures/WEB_retouching_IMG_0346_original.jpg";
    };

    edicion_02_original.onmouseover = function(){
        edicion_02_original.src="/pictures/WEB_retouching_IMG_0465_edited.jpg";
    };
    edicion_02_original.onmouseout = function(){
        edicion_02_original.src="/pictures/WEB_retouching_IMG_0465_original.jpg";
    };

    edicion_03_original.onmouseover = function(){
        edicion_03_original.src="/pictures/WE_retouching_Caterham_485_02_edited.jpg";
    };
    edicion_03_original.onmouseout = function(){
        edicion_03_original.src="/pictures/WE_retouching_Caterham_485_02_original.jpg";
    };

    edicion_04_original.onmouseover = function(){
        edicion_04_original.src="/pictures/WEB_retouching_Caterham_485_01_edited.jpg";
    };
    edicion_04_original.onmouseout = function(){
        edicion_04_original.src="/pictures/WEB_retouching_Caterham_485_01_original.jpg";
    };

    



    
})