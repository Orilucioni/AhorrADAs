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
})

const $ = (selector) => document.getElementById(selector);

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
    // let newItem ={
    //     "nombre": $("inputName").value ,
    //     "id": randomID()
    // }
    // categoryList.push(newItem)
    createList(categoryList)
}

console.log(categoryList)

// const createItems = (categoryList) => {
//     categoryList.forEach((items) => {
//         console.log(items)
//         $("categoryUl").innerHTML = ""
//         $("categoryUl").innerHTML +=`<li>Servicio</li> 
//         <div>
//           <button class="button">Editar</button> <button class="button">Eliminar</button>
//         </div> 
//         <li>Salidas</li> 
//         <div>
//           <button class="button">Editar</button> <button class="button">Eliminar</button>
//         </div> 
//         <li>Educacion</li> 
//         <div>
//           <button class="button">Editar</button> <button class="button">Eliminar</button>
//         </div> 
//         <li>Transporte</li> 
//         <div>
//           <button class="button">Editar</button> <button class="button">Eliminar</button>
//         </div> 
//         <li>Trabajo</li> 
//         <div>
//           <button class="button">Editar</button> <button class="button">Eliminar</button>
//         </div> `
//     })
// }
// createItems(categoryList)


 const createList = (categoryList) => {
      $("categoryUl").innerHTML = ""
      categoryList.forEach((item) => {
          console.log(item)
             let liContent = document.createTextNode(`${item.index}`)
             let liItem = document.createElement("li")
// //         //    let deleteButton = document.createElement("button")
// //         //    deleteButton.addEventListener("click", () => deleteItem(item))
// //         //    let editButton = document.createElement("button")
// //          //  editButton.addEventListener("click", () => editItem(item))
            liItem.classList.add("list-item")
             liItem.appendChild(liContent)
// //         //    liItem.appendChild(deleteButton)
// //         //     liItem.appendChild(editButton)
             $("categoryUl").appendChild(liItem)   
      
    });
    }

$ ("addButton").addEventListener("click", createArray)
  $ ("addButton").addEventListener("click", createList)

// // Seccion categorias boton eliminar
// const deleteItem = (item) => {
// const itemIndex = categoryList.indexOf(item)
// categoryList.splice(itemIndex,1)
// createList(categoryList)
// }

// $("deleteButton").addEventListener("click",deleteItem)

// // Seccion categorias boton editar

// // const editButton = (item) => {
// //     let nuevoValor= 
// // }