function agregarTarea(){

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    
    //Varificamos si el campo está vacío
    if(nuevaTareaTexto === " "){

        alert("Comienza a organizar tu día");

        return;

    }

    //Creamos un elemento en la lista
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){nuevaTarea.remove();}

    //Agregar botón eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar tarea a la lista
    document.getElementById("lista").appendChild(nuevaTarea);

    //limpiar cuadro de texto
    document.getElementById(nuevaTarea).value = " *****      ";

}