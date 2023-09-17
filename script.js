const $ = (selector) => document.getElementById(selector);

//botones del header para visibilizar distintas areas
//variables de botones del header
const headerButtonBalance = document.getElementById("button-balance-header");
const headerButtonCategorias = document.getElementById("button-categorias-header");
const headerButtonReportes = document.getElementById("button-reportes-header");
const nuevaOperacionButton = document.getElementById("nueva-operacion")
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
    nuevaOperacionSection.classList.add("hide-slide")
    nuevaOperacionSection.classList.remove("show-slide")
    $("containerEdit").classList.add("hide-slide")
});
headerButtonReportes.addEventListener("click", ()=>{
    reportesSection.classList.add("show-slide")
    reportesSection.classList.remove("hide-slide")
    mainContainer.classList.add("hide-slide");
    mainContainer.classList.remove("show-slide");
    categoriasSection.classList.add("hide-slide");
    categoriasSection.classList.remove("show-slide"); 
    nuevaOperacionSection.classList.add("hide-slide")
    nuevaOperacionSection.classList.remove("show-slide")
    $("containerEdit").classList.add("hide-slide")
});
headerButtonBalance.addEventListener("click", ()=>{  
    mainContainer.classList.add("show-slide");
    mainContainer.classList.remove("hide-slide");
    categoriasSection.classList.add("hide-slide")
    categoriasSection.classList.remove("show-slide") 
    reportesSection.classList.add("hide-slide")
    reportesSection.classList.remove("show-slide")
    nuevaOperacionSection.classList.add("hide-slide")
    nuevaOperacionSection.classList.remove("show-slide")
    $("containerEdit").classList.add("hide-slide")
});
nuevaOperacionButton.addEventListener("click", ()=>{  
    nuevaOperacionSection.classList.add("show-slide");
    nuevaOperacionSection.classList.remove("hide-slide");
    mainContainer.classList.add("hide-slide");
    mainContainer.classList.remove("show-slide");
    categoriasSection.classList.add("hide-slide")
    categoriasSection.classList.remove("show-slide") 
    reportesSection.classList.add("hide-slide")
    reportesSection.classList.remove("show-slide")
    $("containerEdit").classList.add("hide-slide")
})

// Funciones relacionadas al Local Storage
const getData = () => {
    return JSON.parse(localStorage.getItem("Ahorradas"))
}

const setData = (datos) => {
    localStorage.setItem("Ahorradas", JSON.stringify({...getData(), ...datos}))
}

const getCategories = () => {
    return getData()?.categorias
}

const ahorradas = getData() || {
    categorias: [],
    operaciones: [],
}

// Realizamos la creacion de las categorias
const randomID = () => self.crypto.randomUUID()

let categoryList = [  
    {
        nombre:"Servicio",
        id: randomID()
    },
    {
        nombre:"Salidas",
        id: randomID()
    },
    {
        nombre:"Educacion",
        id: randomID()
    },
    {   
        nombre:"Transporte",
        id: randomID()
    },
    {
        nombre:"Trabajo",
        id: randomID()
    },
     ]

const createArray = (lista) => {
     let newItem ={
         "nombre": $("inputName").value ,
         "id": randomID()
     }
     categoryList.push(newItem)
     createList(categoryList)
     selectCategories(categoryList)
}

console.log(categoryList)

 const createList = (categoryList) => {
      $("categoryUl").innerHTML = "";
      for (let {nombre, id} of categoryList) {
             let liContent = document.createTextNode(nombre);
             let liItem = document.createElement("li");
             let deleteButton = document.createElement("button")
             deleteButton.classList.add("button")
             deleteButton.setAttribute("id", '${id}')
             let textDeleteButton = document.createTextNode("Eliminar")
             deleteButton.appendChild(textDeleteButton)
             deleteButton.addEventListener("click", () => deleteItem(id))
            let editButton = document.createElement("button")
            editButton.classList.add("button")
            editButton.setAttribute("id", '${id}')
            let textEditButton = document.createTextNode("Editar")
            editButton.appendChild(textEditButton)
            editButton.addEventListener("click", () => editItem(id))
            liItem.classList.add("list-item");
             liItem.appendChild(liContent);
             liItem.appendChild(deleteButton)
               liItem.appendChild(editButton)
             $("categoryUl").appendChild(liItem)  
              
    };
    }

$ ("addButton").addEventListener("click", () => createArray(categoryList))
$ ("addButton").addEventListener("click", createList(categoryList))
$ ("cancelledButtton").addEventListener("click", () => hideSeccionEdit())
$ ("edit-button").addEventListener("click", () => updateItem())

// // Seccion categorias boton eliminar
 const deleteItem = (id) => {
 const itemIndex = categoryList.indexOf(id)
 categoryList.splice(itemIndex,1)
 createList(categoryList)
 }


// // Seccion categorias boton editar

   const editItem = (item) => {
    $("categorias-section").classList.add("hide-slide")
    $("containerEdit").classList.remove("hide-slide");
    }
    
    const updateItem = () =>{
        let newValue = $("edit-input").value;
        console.log(newValue)  
        let itemIndex = categoryList.indexOf(item)    
    }
    

const hideSeccionEdit = () => {
    $("containerEdit").classList.add("hide-slide");
    $("categorias-section").classList.remove("hide-slide")
}

// Seccion Operaciones

// Filtros por categorias

const selectCategories = (categoryList) => {
    $("categoria-select").innerHTML = ""
    $("categoria-select").innerHTML += ` <option value="Todas">Todas</option>`
    for (let category of categoryList) {
        let option = document.createElement("option")
        option.innerHTML= `${category.nombre}`
        $("categoria-select").appendChild(option)
    }
}

selectCategories(categoryList)