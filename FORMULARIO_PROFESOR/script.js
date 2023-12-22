let allPersons = [];

nombres.oninput = function(){
    document.getElementById("nombres").classList.remove("is-invalid");
    document.getElementById("nombres").classList.add("is-valid");
}
apellidos.oninput = function(){
    document.getElementById("apellidos").classList.remove("is-invalid");
    document.getElementById("apellidos").classList.add("is-valid");
}
correo.oninput = function(){
    document.getElementById("correo").classList.remove("is-invalid");
    document.getElementById("correo").classList.add("is-valid");
}

function guardarPersona(){
    let formNombre = document.getElementById('nombres').value.trim();
    let formApellido = document.getElementById('apellidos').value.trim();
    let formCorreo = document.getElementById('correo').value.trim();

    if(formNombre === "" || formApellido === "" || formCorreo === ""){
        alert("Todos los campos son obligatorios");return;
    }

    let persona = {
        nombre : formNombre,
        apellido : formApellido,
        correo :formCorreo
    }

    console.log(persona);
    allPersons = [];
    allPersons.push(persona);
    allPersons.forEach(function (person, index) {
        document.getElementById("tabla").innerHTML += ` <tr id="fila-${index}">
            <td>${person.nombre}</td>
            <td>${person.apellido}</td>
            <td>${person.correo}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarFila(${index})">Eliminar</button>
            </td>
        </tr>`;
    });
    limpiar();
}

function limpiar (){
    document.getElementById("nombres").value="";
    document.getElementById("apellidos").value="";
    document.getElementById("correo").value="";
}
function eliminarFila(index) {
    // Elimina la fila correspondiente al índice proporcionado
    document.getElementById(`fila-${index}`).remove();

    // Elimina la persona del arreglo
    allPersons.splice(index, 1);
}

