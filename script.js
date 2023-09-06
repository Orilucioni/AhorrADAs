//botones del header para visibilizar distintas areas
//variables de botones del header
const headerButtonBalance = document.getElementById("button-balance-header");
const headerButtonCategorias = document.getElementById("button-categorias-header");
const headerButtonReportes = document.getElementById("button-reportes-header");
//variables de secciones
const mainContainer = document.getElementById("main-container");
const nuevaOperacionSection = document.getElementById("nueva-operacion-section");
const categoriasSection = document.getElementById("categorias-section");
const reportesSection = document.getElementById("reportes-section");

//eventos de click para cambios en la visibilidad de las secciones
headerButtonCategorias.addEventListener("click", ()=>{ 
    categoriasSection.classList.add("show-slide")
    categoriasSection.classList.remove("hide-slide") 
    mainContainer.classList.add("hide-slide");
    mainContainer.classList.remove("show-slide");
    reportesSection.classList.add("hide-slide");
    reportesSection.classList.remove("show-slide");
});
headerButtonReportes.addEventListener("click", ()=>{
    reportesSection.classList.add("show-slide")
    reportesSection.classList.remove("hide-slide")
    mainContainer.classList.add("hide-slide");
    mainContainer.classList.remove("show-slide");
    categoriasSection.classList.add("hide-slide");
    categoriasSection.classList.remove("show-slide"); 
});
headerButtonBalance.addEventListener("click", ()=>{  
    mainContainer.classList.add("show-slide");
    mainContainer.classList.remove("hide-slide");
    categoriasSection.classList.add("show-slide")
    categoriasSection.classList.remove("hide-slide") 
    reportesSection.classList.add("hide-slide")
    reportesSection.classList.remove("show-slide")
});
