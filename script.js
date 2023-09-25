const $ = (selector) => document.getElementById(selector);

const $$ = (selector) => document.querySelectorAll(selector)
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
    nuevaOperacionSection.classList.add("hide-slide");
    nuevaOperacionSection.classList.remove("show-slide");
    containerEditOperation.classList.add("hide-slide")
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
    containerEditOperation.classList.add("hide-slide")
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
    containerEditOperation.classList.add("hide-slide")
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
    containerEditOperation.classList.add("hide-slide")
})

// Funciones relacionadas al Local Storage

 const getData = () => {
     return JSON.parse(localStorage.getItem("ahorradas"));
 };

 const setData = (datos) => {
     localStorage.setItem("ahorradas", JSON.stringify({...getData(), ...datos}))
 };



const getCategories = () => {
     return getData()?.categorias;
 };

 const getOperations = () => {
     return getData()?.operaciones;
 }


// Realizamos la creacion de las categorias
const randomID = () => self.crypto.randomUUID()


let categoryList = getCategories() || [  
    {
        nombre:"Servicio",
        id: randomID(),
    },
    {
        nombre:"Salidas",
        id: randomID(),
    },
    {
        nombre:"Educacion",
        id: randomID(),
    },
    {   
        nombre:"Transporte",
        id: randomID(),
    },
    {
        nombre:"Trabajo",
        id: randomID()
    },
     ];

setData({categorias: categoryList});

const createArray = (lista) => {
     let newItem ={
         "nombre": $("inputName").value ,
         "id": randomID()
     };
     categoryList.push(newItem);
     createList(categoryList);
     selectCategories(categoryList);
     setData({categorias: categoryList});
     };

const createList = (lista) => {
    console.log(categoryList);
      $("categoryUl").innerHTML = "";
      for (let {nombre, id} of categoryList) {
        $("categoryUl").innerHTML += `<li class= "is-flex is-justify-content-space-between">
        <p> ${nombre} </p>
        <div> 
            <button  onclick="editItem('${id}')" id="${id}" class= "button"> Editar </button>
            <button  onclick="deleteItem('${id}')" id="${id}" class= "button"> Eliminar </button>  
        </div>
        </li>`        
    };
    };
createList(categoryList);

  const obtenerCategory = (idCategoria, categoryList) => {
     return categoryList.find((categoria) => categoria.id === idCategoria)
  } 
  const obtenerOperation = (idOperation, operationList) => {
    return operationList.find((operation) => operation.id === idOperation)
 } 
 
$ ("addButton").addEventListener("click", () => createArray(categoryList))
$ ("addButton").addEventListener("click", createList(categoryList))
// $ ("edit-button").addEventListener("click", () => updateItem())
// $ ("cancelledButtton").addEventListener("click", () => hideSeccionEdit)

// // // Seccion categorias boton eliminar
//   const deleteItem = (id, categoryList) => {
//     return categoryList.filter((categoria) => categoria.id !== id);
//   }


// // // Seccion categorias boton editar
    const updateItem = (id) =>{
        console.log(id)
        let newCategory = {
         id : id,
         nombre: $("edit-input").value,
        };
        let updateCategories = getCategories().map((categoria) => 
         categoria.id === id ? { ...newCategory } : categoria)
        createList(updateCategories);
        selectCategories(updateCategories)
        setData({categorias: updateCategories})
        } 

    const editItem = (id) => {
     $("categorias-section").classList.add("hide-slide");
     $("containerEdit").classList.remove("hide-slide");
     let categoriaEditada =obtenerCategory(id, getCategories());
    $("edit-input").value = categoriaEditada.nombre;
    $("edit-button").addEventListener("click", () => updateItem(categoriaEditada.id));
    }



//  const hideSeccionEdit = () => {
//      $("containerEdit").classList.add("hide-slide");
//      $("categorias-section").classList.remove("hide-slide")
//  }

//   const hideSeccionEdit = () => {
//     $("categorias-section").classList.remove("hide-slide");
//       $("containerEdit").classList.add("hide-slide");   
//   }




// // Filtros por categorias

 const selectCategories = (categoryList) => {
    $$(".select-category").forEach((select) => {
        select.innerHTML = "";
    })
    $("categoria-select").innerHTML += ` <option value="Todas">Todas</option>`
    $$(".select-category").forEach((select) => {
        for (let {nombre,id} of categoryList) {
            select.innerHTML += `<option value= "${id}"> ${nombre} </option>`
     }
    })
    }

    selectCategories(categoryList)
    createList(getCategories())


let operationList = getOperations() || []
console.log (operationList)
 const addOperation = () => {

     let newOperation = {
         id: randomID(),
         description: $('input-description').value,
         amount:  $("input-monto").value,
         type:  $("select-type").value,
         category:  $("select-category").value,
         date:  $("input-date-operation").value,
     };
 
 operationList.push(newOperation)
 console.log(operationList)
 createOperations(operationList)
setData({ operaciones: [...operationList] }); 
 console.log(getData());
 };

 $("addOperationButton").addEventListener("click", addOperation);

const createOperations = () => {
    $("container-operations-items").innerHTML=""
    for (let {description, id, amount, category,date} of operationList) {
        $("container-operations-items").innerHTML += `
        <div class="columns">
        <div class="column is-3">
          <p class="is-size-6">${description}</p>
        </div>
        <div class="column is-3 ">
          <p class="is-size-6">${category}</p>
        </div>
        <div class="column is-2 ">
          <p class="is-size-6">${date}</p>
        </div>
        <div class="column is-2 ">
          <p class="is-size-6">${amount}</p>
        </div>
        <div class="column is-2 is flex is-flex-direction-column ">
          <button onclick="editOperationItem('${id}')" id="${id}" class=" is-size-6"> Editar </button>
          <button onclick="deleteItem('${id}')" id="${id}" class=" is-size-6"> Eliminar </button>
        </div>
      </div>`
    }
}

createOperations(operationList)

 const updateItemOperations = (id) =>{
     console.log(id)
     let newOperations = {
     id : id,
     description: $('input-description').value,
     amount:  $("input-monto").value,
     type:  $("select-type").value,
     category:  $("select-category").value,
     date:  $("input-date").value,
     };
     let updateOperations = getOperations().map((operation) => 
      categoria.id === id ? { ...newOperations } : operation)
     createOperations(updateOperations);
     setData({operaciones: updateOperations})
     } 

     const editOperationItem = (id) => {
         $("boxes-operation-balance-filters").classList.add("hide-slide");
         $("containerEditOperation").classList.remove("hide-slide");
         let operacionEditada = obtenerCategory(id, getCategories());
        $("edit-operation-input").value = operacionEditada.description;
        $("edit-amount-input").value = operacionEditada.amount;
        $("select-type").value = operacionEditada.type;
        $("select-category").value = operacionEditada.category;
        $("input-date").value = operacionEditada.date;
        $("edit-operation-button").addEventListener("click", () => updateItemOperations(operacionEditada.id));
        }
