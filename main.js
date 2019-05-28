var formulario = document.querySelector("form")
var eliminando = document.getElementsByClassName("claseDelBotonEliminar");


formulario.onsubmit = function (e) {



    // evitamos que el form se mande 
    e.preventDefault();
// console.log(e)
    // selecciono los elementos del formulario 
    var nombre_form = formulario.elements[0]
    var edad_form = formulario.elements[1]
    var soltero_form = formulario.elements[2]
    var casado_form = formulario.elements[3]
    var nacionalidad_form = formulario.elements[4]



    // asigno el valor de nombre y edad a variables 
    var nombre = nombre_form.value
    var edad = edad_form.value




    // Creamos una variable "estado" y le asignamos el valor
    // del checkbox que este seleccionado. 
    // Ejemplo, si "soltero" esta seleccionado, "estado" va a ser "soltero"
    var estado = ''
    if (soltero_form.checked) {
        estado = soltero_form.value
    }
    else if (casado_form.checked) {
        estado = casado_form.value
    }
    else estado = 'vacio'


    // seleccionamos el select
    // Sacamos el indice de la opcion seleccionada
    // Usando ese indice, buscamos la opcion elegida
    // Asignamos la opcion elegida a la variable "nacionalidad"


    var i = nacionalidad_form.selectedIndex

    var nacionalidad = nacionalidad_form.options[i].value

    // console.log para chequear que nuestros datos esten bien 

    console.log(nombre, edad)
    console.log(estado)
    console.log(nacionalidad)



    //   // Ahora validamos, marcando como error en el form: 

    // Nombre no tiene que estar vacio
    if (nombre.length === 0) {
        nombre_form.classList.add("error")
    }

    // version alternativa (mas linda)
    // if (!nombre) {
    //   nombre_form.classList.add("error")
    // }


    // edad debe ser mayor a 18 y menor a 120
    if (edad < 18 || edad > 120) {
        edad_form.classList.add("error")
    }

    if (estado === 'vacio') {



        soltero_form.nextElementSibling.classList.add("error")
        casado_form.nextElementSibling.classList.add("error")
    }





    // // nacionalidades se "autovalidan", 
    // // porque ya sabemos que estan seleccionadas. 


    if (nombre.length > 0
        && (edad > 18
            && edad < 120)
        && estado !== 'vacio') {
        agregarInvitado(nombre, edad, estado, nacionalidad)
    }
}



function agregarInvitado(nombre, edad, estado, nacionalidad) {
    console.log('AAAAA', nombre, edad, estado, nacionalidad)
    var lista = document.createElement("ul")
    
    var listaGrande = document.getElementById("lista-de-invitados")
    listaGrande.appendChild(lista)

    // lista.appendChild(edad)
    // lista.appendChild(estado)
    // lista.appendChild(nacionalidad)
    // lista.appendChild(node);

    var nodeNombre = document.createElement("input");

    nodeNombre.value = nombre
    lista.appendChild(nodeNombre);



    var nodeEdad = document.createElement("input");

    nodeEdad.value = edad
    lista.appendChild(nodeEdad);




    var nodeEstado = document.createElement("input");

    nodeEstado.value = estado
    lista.appendChild(nodeEstado);




    var nodeNacionalidad = document.createElement("input");

    nodeNacionalidad.value = nacionalidad
    lista.appendChild(nodeNacionalidad);


    var botonEliminar = document.createElement("button")


    botonEliminar.textContent = "eliminarInvitado"
    lista.appendChild(botonEliminar)
    botonEliminar.classList.add("claseDelBotonEliminar")
    console.log(eliminando);

    botonEliminar.onclick= function () {
      
        botonEliminar.parentNode.remove()
    }
       

}









 


// var deletingGuess = document.getElementById("eliminoInvitado")

// deletingGuess.onClick = function () {
   
    
// deletingGuess.innerHTML {

//     console.log(olaaaaaaa)
// }
// }