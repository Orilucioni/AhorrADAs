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
headerButtonCategorias.addEventListener("click", () => {
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
headerButtonReportes.addEventListener("click", () => {
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
headerButtonBalance.addEventListener("click", () => {
    mainContainer.classList.add("show-slide");
    mainContainer.classList.remove("hide-slide");
    categoriasSection.classList.add("hide-slide")
    categoriasSection.classList.remove("show-slide")
    reportesSection.classList.add("hide-slide")
    reportesSection.classList.remove("show-slide")
    nuevaOperacionSection.classList.add("hide-slide")
    nuevaOperacionSection.classList.remove("show-slide")
    $("containerEdit").classList.add("hide-slide")
    containerEditOperation.classList.add("hide-slide");
    $("container-operaciones").classList.remove("hide-slide");
    $("aside").classList.remove("hide-slide");
});
nuevaOperacionButton.addEventListener("click", () => {
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

// const showSeccion = () => {

// }

// Funcion para inicializar




// Funciones relacionadas al Local Storage

const getData = () => {
    return JSON.parse(localStorage.getItem("ahorradas"));
};

const setData = (datos) => {
    localStorage.setItem("ahorradas", JSON.stringify({ ...getData(), ...datos }))
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
        nombre: "Servicio",
        id: randomID(),
    },
    {
        nombre: "Salidas",
        id: randomID(),
    },
    {
        nombre: "Educacion",
        id: randomID(),
    },
    {
        nombre: "Transporte",
        id: randomID(),
    },
    {
        nombre: "Trabajo",
        id: randomID()
    },
];



// setData({categorias: categoryList});

const createArray = (lista) => {
    let newItem = {
        "nombre": $("inputName").value,
        "id": randomID()
    };
    categoryList.push(newItem);
    setData({ categorias: categoryList });
    updatePage(getData());
    //  createList(categoryList);
    //  selectCategories(categoryList);

};

const createList = (lista) => {
    console.log(categoryList);
    $("categoryUl").innerHTML = "";
    for (let { nombre, id } of lista) {
        $("categoryUl").innerHTML += `<li class= "is-flex is-justify-content-space-between">
        <p> ${nombre} </p>
        <div> 
            <button  onclick="editItem('${id}')" id="${id}" class= "button"> Editar </button>
            <button  onclick="deleteItem('${id}', categoryList)" id="${id}" class= "button"> Eliminar </button>  
        </div>
        </li>`
    };
};


const obtenerCategory = (idCategoria, arrayCategories) => {
    return categoryList.find((categoria) => categoria.id === idCategoria)
};
const obtenerOperation = (idOperation, arrayOperations) => {
    return operationList.find((operation) => operation.id === idOperation)
};

$("addButton").addEventListener("click", () => createArray(categoryList));
$("addButton").addEventListener("click", createList(categoryList));


// // // Seccion categorias boton eliminar
const deleteItem = (id, categoryList) => {
    let newList = categoryList.filter((categoria) => categoria.id !== id);
    console.log(newList);
    setData({ categorias: newList });
    updatePage(getData());
    //  createList(newList);
    //  selectCategories(newList);

};


// // // Seccion categorias boton editar
const updateItem = (id) => {
    console.log(id)
    let newCategory = {
        id: id,
        nombre: $("edit-input").value,
    };
    let updateCategories = getCategories().map((categoria) =>
        categoria.id === id ? { ...newCategory } : categoria);
    setData({ categorias: updateCategories });
    updatePage(getData())
    // createList(updateCategories);
    // selectCategories(updateCategories);

}

const editItem = (id) => {
    $("categorias-section").classList.add("hide-slide");
    $("containerEdit").classList.remove("hide-slide");
    let categoriaEditada = obtenerCategory(id, getCategories());
    $("edit-input").value = categoriaEditada.nombre;
    $("edit-button").addEventListener("click", () => updateItem(categoriaEditada.id));
}



   const hideSeccionEdit = () => {
     $("categorias-section").classList.remove("hide-slide");
       $("containerEdit").classList.add("hide-slide");   
   }
$ ("cancelledButtton").addEventListener("click", () => hideSeccionEdit());



// // Llenar select categorias

const selectCategories = (categoryList) => {
    $$(".select-category").forEach((select) => {
        select.innerHTML = "";
    })
    $("categoria-select").innerHTML += ` <option value="Todas">Todas</option>`
    $$(".select-category").forEach((select) => {
        for (let { nombre, id } of categoryList) {
            select.innerHTML += `<option value= "${id}"> ${nombre} </option>`
        }
    })
}



// Seccion operaciones

let operationList = getOperations() || [];

const addOperation = () => {

    let newOperation = {
        id: randomID(),
        description: $('input-description').value,
        amount: $("input-monto").value,
        type: $("select-type").value,
        category: $("new-operation-category").value,
        date: $("input-date-operation").value,
    };

    operationList.push(newOperation)
    console.log(operationList)
    createOperations(operationList)
    setData({ operaciones: [...operationList] });
};

$("addOperationButton").addEventListener("click", addOperation);


const createOperations = (lista) => {
    // let signal = type.toLowerCase() === "gasto" ? `-` : `+`;
    $("container-operations-items").innerHTML = ""
    for (let { description, id, amount, category, date } of lista) {
        let updateDate = new Date(date + 'T00:00:00-03:00');
        $("container-operations-items").innerHTML += `
        <div class="columns">
        <div class="column is-3">
          <p class="is-size-6">${description}</p>
        </div>
        <div class="column is-3 ">
          <p class="is-size-6">${category}</p>
        </div>
        <div class="column is-2 ">
          <p class="is-size-6">${updateDate.getDate()}/${updateDate.getMonth() + 1}/${updateDate.getFullYear()}</p>
        </div>
        <div class="column is-2 ">
          <p class="is-size-6">$ ${amount}</p>
        </div>
        <div class="column is-2 is flex is-flex-direction-column ">
          <button onclick="editOperationItem('${id}')" id="${id}" class=" is-size-6"> Editar </button>
          <button onclick="deleteOperationItem('${id}')" id="${id}" class=" is-size-6"> Eliminar </button>
        </div>
      </div>`
    }
};

const updateItemOperations = (id) => {
    console.log(id)
    let newOperations = {
        id: id,
        description: $('edit-operation-input').value,
        amount: $("edit-amount-input").value,
        type: $("edit-type-input").value,
        category: $("select-category").value,
        date: $("edit-date-input").value,
    };
    let updateOperations = getOperations().map((operation) =>
        operation.id === id ? { ...newOperations } : operation);
    createOperations(updateOperations);
    setData({ operaciones: updateOperations });
    $("container-operaciones").classList.remove("hide-slide");
    $("aside").classList.remove("hide-slide");
    $("containerEditOperation").classList.add("hide-slide");
};

const editOperationItem = (id) => {
    $("container-operaciones").classList.add("hide-slide");
    $("aside").classList.add("hide-slide");
    $("containerEditOperation").classList.remove("hide-slide");
    let operacionEditada = obtenerOperation(id, getOperations());
    $("edit-operation-input").value = operacionEditada.description;
    $("edit-amount-input").value = operacionEditada.amount;
    $("edit-type-input").value = operacionEditada.type;
    $("select-category").value = operacionEditada.category;
    $("edit-date-input").value = operacionEditada.date;
    $("edit-operation-button").addEventListener("click", () => updateItemOperations(operacionEditada.id));
};



// const deleteOperationItem = (id, operationList) => {
//     let newList = categoryList.filter((operation) => operation.id !== id);
//     console.log(newList);
    
//     // updatePage(getData());
//       createOperations(newList);
      
// setData({operaciones: newList });
// };

const hideEditSeccion = () => {
    $("container-operaciones").classList.remove("hide-slide");
    $("aside").classList.remove("hide-slide");
    $("containerEditOperation").classList.add("hide-slide");
}

$("button-exit-edit").addEventListener("click", () => hideEditSeccion());

// Seccion filtros

const hideFilters = () => {
    $("filters-container").classList.add(("hide-slide"));
    $("hide-filter").classList.add(("hide-slide"));
    $("show-filter").classList.remove(("hide-slide"));
}

const showFilters = () => {
    $("filters-container").classList.remove(("hide-slide"));
    $("hide-filter").classList.remove(("hide-slide"));
    $("show-filter").classList.add(("hide-slide"));
}


$("hide-filter").addEventListener("click", () => hideFilters());
$("show-filter").addEventListener("click", () => showFilters());

const filterType = (operationList, typeOfOperation) => {
    let filterrType = operationList.filter((operation) => operation.type.toLowerCase() === typeOfOperation.toLowerCase());
    console.log(filterrType)
    return filterrType;

};

const filterCategory = (operationList, categories) => {
    let filterrCategory = operationList.filter((operation) => operation.category === categories);
    console.log(filterrCategory)
    return filterrCategory;
};

const filterDate = () => {
    let operationFilterDate = operationList.filter((operation) => new Date(operation.date) >= new Date($("edit-date-input").value))
    return operationFilterDate
};

const filtersOrder = (operaciones, orden) => {
    if (orden === "Más reciente") {
        return [...operaciones].sort((a, b) => {
            const fechaA = new Date(a.date);
            const fechaB = new Date(b.date);
            return orden === "Más reciente"
                ? fechaA.getTime() - fechaB.getTime()
                : fechaB.getTime() - fechaA.getTime();
        })
    }

    if (orden === "Menos reciente") {
        return [...operaciones].sort((a, b) => {
            const fechaA = new Date(a.date);
            const fechaB = new Date(b.date);
            return orden === "Menos reciente"
                ? fechaB.getTime() - fechaA.getTime()
                : fechaA.getTime() - fechaB.getTime();
        })
    }
    if (orden === "Mayor monto") {
        return [...operaciones].sort((a, b) => {
            const montoA = a.amount;
            const montoB = b.amount;
            return orden === "Mayor monto"
                ? montoB - montoA
                : montoA - montoB;
        })
    };
    if (orden === "Menor monto") {
        return [...operaciones].sort((a, b) => {
            const montoA = a.amount;
            const montoB = b.amount;
            return orden === "Menor monto"
                ? montoA - montoB
                : montoB - montoA;
        })
    };

    if (orden === "A/Z") {
        return [...operaciones].sort((a, b) => {
            const descriptionA = a.description;
            const descriptionB = b.description;
            return orden === "A/Z"
                ? descriptionB - descriptionA
                : descriptionA - descriptionB;
        })
    };
    if (orden === "Z/A") {
        return [...operaciones].sort((a, b) => {
            const descriptionA = a.description;
            const descriptionB = b.description;
            return orden === "Z/A"
                ? descriptionA - descriptionB
                : descriptionB - descriptionA;
        })
    };

}


const applyFilters = () => {
    let operacionesFiltradas = [...operationList];
    let filtersType = $("tipo-select").value;
    let filtersCategories = $("categoria-select").value;
    let filterDates = $("date-select").value;
    let filterOrder = $("order-select-filtros").value;

    if (filtersType != "Todos") {
        operacionesFiltradas = filterType(operationList, filtersType);
        return operacionesFiltradas
    };

    operacionesFiltradas = filterCategory(operationList, filtersCategories);
    operacionesFiltradas = filterDate(operationList, filterDates);
    operacionesFiltradas = filtersOrder(operationList, filterOrder);

    console.log(operacionesFiltradas);
    createOperations(operacionesFiltradas);
};


$("tipo-select").addEventListener("change", () => applyFilters());
$("categoria-select").addEventListener("change", () => applyFilters());
$("date-select").addEventListener("change", () => applyFilters());
$("order-select-filtros").addEventListener("change", () => applyFilters());


// Seccion Balance 

 const balanceOperations = () => {
     if (operationList.lenght > 0) {
         balance(operationList)
     } else {
        let zero = document.createTextNode('0');

      $("spent-balance").appendChild(zero);
      $("gain-balance").appendChild(zero);
      $("total-balance").appendChild(zero);
console.log("hola soy balance");
      }
     }
     
 

  const balance = (operationList) => { 
    // if (operationList.lenght > 0) {

    console.log("soy suma")
    let spent = "";
    let gain =  "";
     for (let {type, amount} of operationList) {
         if (type.toLowerCase() === "gasto") {
             spent += amount
         } else {
            gain += amount
         }
     };

     let total= Number(gain) - Number(spent);
     let gainText= document.createTextNode(`${gain}`);
     let spentText= document.createTextNode(`${spent}`);
     let totalText= document.createTextNode(`${total}`);

     $("spent-balance").appendChild(spentText);
     $("gain-balance").appendChild(gainText);
     $("total-balance").appendChild(totalText);

    //  } 
    //  else { 
    //     let zero = document.createTextNode('0');

    //  $("spent-balance").appendChild(zero);
    //  $("gain-balance").appendChild(zero);
    //  $("total-balance").appendChild(zero);

    //  }

  };
balance(operationList)

const inicializar = () => {
    createList(categoryList);
    selectCategories(categoryList);
    createOperations(operationList);
    setData({ categorias: categoryList });
    balanceOperations(operationList);
};

window.onload = inicializar()

const updatePage = (datos) => {
    createList(datos.categorias);
    selectCategories(datos.categorias);
    createOperations(datos.operaciones);
};