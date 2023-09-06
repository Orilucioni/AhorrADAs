const $ = (selector) => document.getElementById(selector);

// Realizamos la creacion de las categorias
const randomID = () => self.crypto.randomUUID()

let categoryList = [  
    {
        "nombre":"Servicio",
        "id": randomID()
    },
    {
        "nombre":"Salidas",
        "id": randomID()
    },
    {
        "nombre":"Educacion",
        "id": randomID()
    },
    {   
        "nombre":"Transporte",
        "id": randomID()
    },
    {
        "nombre":"Trabajo",
        "id": randomID()
    }
     ]


const createArray = (lista) => {
    let newItem = {
        "nombre": $("inputName").value ,
        "id": randomID()
    }
    categoryList.push(newItem)
    createList(categoryList)
    // $("inputName").reset()
}

// $ ("inputName").addEventListener("keydown", function(event){
//     if (event.key === "Enter") {
//         createArray()
//     }
// })
console.log(categoryList)

 const createList = (categoryList) => {
     $("categoryUl").innerHTML = ""
     categoryList.forEach((item) => {
         console.log(item)
//             let liContent = document.createTextNode(`${item.index}`)
//             let liItem = document.createElement("li")
// //         //    let deleteButton = document.createElement("button")
// //         //    deleteButton.addEventListener("click", () => deleteItem(item))
// //         //    let editButton = document.createElement("button")
// //          //  editButton.addEventListener("click", () => editItem(item))
//            liItem.classList.add("list-item")
//             liItem.appendChild(liContent)
// //         //    liItem.appendChild(deleteButton)
// //         //     liItem.appendChild(editButton)
//             $("categoryUl").appendChild(liItem)   
      
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