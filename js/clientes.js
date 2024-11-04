function mostrarClientes (){
    console.log('Función mostrar llamada');

    let request = sendRequest ('clientes', 'GET',''); // para traer el metodo get de clientes
    let table = document.getElementById('clientes-table');
    table.innerHTML = "";

    request.onload = function () {
        let data = request.response;
       console.log(data);    
       
        data.forEach(element => { // inicia ubicacion elementos tabala 
            table.innerHTML += `
            <tr>                            
                <td> ${element.nombres} </td>
                <td> ${element.apellidos} </td>
                <td> ${element.telefono} </td>
                <td> ${element.email} </td>
                <td> ${element.fecha_de_nacimiento} </td>
                <td> ${element.genero_literario_favorito} </td>
                <td> ${element.ciudad} </td>
                <td> ${element.direccion} </td>
                <td>
                <button type="button" class="btn btn-primary" onclick="window.location = '/clientes.html?id=${element._id}'">Editar</button>         
                  
                    <button type="button" class="btn btn-danger" onclick='deleteClientes("${element._id}")'>Eliminar</button>
                </td>           
            </tr> `  // termina ubicacion elementos tabla (ojo con las comillas)            
        });
    } 
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">Error al traer los datos </td>
        </tr>
        `
    }

 }

 function deleteClientes(id) {    // iniciamos funcion eliminar  
    let request = sendRequest ('clientes/'+id, 'DELETE','')
    request.onload = function (){
        mostrarClientes();
    }
}
function guardarClientes (){
    let nom = document.getElementById('nombres-n').value // se le dice a la funcion de guardar clientes que se va editar nombres-n (esto se llamo en el formulario)
    let ape = document.getElementById('apellidos-a').value
    let tel = document.getElementById('telefono-t').value
    let ema = document.getElementById('email-e').value
    let fecna = document.getElementById('fecha_de_nacimiento-f').value
    let genl = document.getElementById('genero_literario_favorito-g').value
    let ciu = document.getElementById('ciudad-c').value
    let dir = document.getElementById('direccion-d').value   
    let data = {
        'nombres':nom,
        'apellidos':ape,
        'telefono':tel,
        'email':ema,
        'fecha_de_nacimiento':fecna,
        'genero_literario_favorito':genl,
        'ciudad':ciu,
        'direccion':dir,} // primero se coloca el nombre que se le coloco en el modelo y luego el nombre de funcion que se le dio arriba 
       
        console.log(data);    
    let request =sendRequest('clientes/', 'POST', data);
    request.onload = function () {
        window.location = 'clientes.html'
    }
  request.onerror = function (){
        alert("Error al Guardar los datos")
    }
}
function cargarDatos (id){
    let request = sendRequest('clientes/'+id, 'GET', '' );
    let nom = document.getElementById('nombres-n')  // se le dice a la funcion de guardar clientes que se va editar nombres-n (esto se llamo en el formulario)
    let ape = document.getElementById('apellidos-a') 
    let tel = document.getElementById('telefono-t') 
    let ema = document.getElementById('email-e') 
    let fecna = document.getElementById('fecha_de_nacimiento-f') 
    let genl = document.getElementById('genero_literario_favorito-g') 
    let ciu = document.getElementById('ciudad-c') 
    let dir = document.getElementById('direccion-d') 
    

    request.onload = function(){
        let data = request.response;
        nom.value = data.nombres
        ape.value = data.apellidos
        tel.value = data.telefono
        ema.value = data.email
        fecna.value = data.fecha_de_nacimiento
        genl.value = data.genero_literario_favorito
        ciu.value = data.ciudad
        dir.value = data.direccion
        console.log(data)
    }
    request.onerror = function(){
        alert("Error al guardar los datos")         
    }  
}

function modificarClientes(id){
    let nom = document.getElementById('nombres-n').value // se le dice a la funcion de guardar clientes que se va editar nombres-n (esto se llamo en el formulario)
    let ape = document.getElementById('apellidos-a').value
    let tel = document.getElementById('telefono-t').value
    let ema = document.getElementById('email-e').value
    let fecna = document.getElementById('fecha_de_nacimiento-f').value
    let genl = document.getElementById('genero_literario_favorito-g').value
    let ciu = document.getElementById('ciudad-c').value
    let dir = document.getElementById('direccion-d').value    
    let data = {
        'nombres':nom,
        'apellidos':ape,
        'telefono':tel,
        'email':ema,
        'fecha_de_nacimiento':fecna,
        'genero_literario_favorito':genl,
        'ciudad':ciu,
        'direccion':dir,} 

    let request = sendRequest('clientes/'+id, 'PUT', data);
    console.log(request)
    request.onload = function(){
        window.location = 'clientes.html'
    }
    request.onerror = function(){
        alert("Error al modificar los datos")
    }
}



