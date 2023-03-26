"use strict"
//Bloque de codigo para la primera imagen
const init = () => {
    const div = document.getElementById("edicion_01");
    const base = document.getElementById("edicion_01_editada");
    const overlay = document.getElementById("edicion_01_original");
    div.addEventListener("mousemove", function(event) {
        const rect = div.getBoundingClientRect();
         overlay.style.height = `${base.height}px`;
        if (event && event.clientX){
            overlay.style.width = `${event.clientX-rect.left}px`;
        }
    });        
};     
window.addEventListener("load", init, { once: true });

//Bloque de codigo para la segunda imagen
const init2 = () => {
    const div2 = document.getElementById("edicion_02");
    const base2 = document.getElementById("edicion_02_editada");
    const overlay2 = document.getElementById("edicion_02_original");
    div2.addEventListener("mousemove", function(event) {
        const rect = div2.getBoundingClientRect();
        overlay2.style.height = `${base2.height}px`;
        if (event && event.clientX){
            overlay2.style.width = `${event.clientX-rect.left}px`;
        } 
    });
};
    window.addEventListener("load", init2, { once: true });

//Bloque de codigo para la segunda imagen
const init3 = () => {
    const div3 = document.getElementById("edicion_03");
    const base3 = document.getElementById("edicion_03_editada");
    const overlay3 = document.getElementById("edicion_03_original");
    div3.addEventListener("mousemove", function(event) {
        const rect = div3.getBoundingClientRect();
        overlay3.style.height = `${base3.height}px`;
        if (event && event.clientX){
            overlay3.style.width = `${event.clientX-rect.left}px`;
        } 
    });
};
    window.addEventListener("load", init3, { once: true });