function mostrarPrestamos (){
    console.log('Función mostrar llamada');

    let request = sendRequest ('prestamos', 'GET',''); // para traer el metodo get de clientes
    let table = document.getElementById('prestamos-table');
    table.innerHTML = "";

    request.onload = function () {
        let data = request.response;
       console.log(data);    
       
        data.forEach(element => { // inicia ubicacion elementos tabala 
            table.innerHTML += `
            <tr>                            
                <td> ${element.nombres} </td>
                <td> ${element.apellidos} </td>
                <td> ${element.documento} </td>
                <td> ${element.email} </td>
                <td> ${element.telefono} </td>
                <td> ${element.direccion} </td> 
                <td> ${element.tituloPrestamo} </td> 
                <td> ${element.fechaDePrestamo} </td>
                <td> ${element.fechaDeEntrega} </td>
                <td> ${element.entregaLibro} </td> 
                <td> ${element.estadoPrestamo} </td> 
                <td> ${element.ciudad} </td>                          
             
                <td>                
                    <button type="button" class="btn btn-primary" onclick="window.location = '/prestamos.html?id=${element._id}'">Editar</button>
                    <button type="button" class="btn btn-danger" onclick='deletePrestamos("${element._id}")'>Eliminar</button>
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

 function deletePrestamos(id) {    // iniciamos funcion eliminar  
    let request = sendRequest ('prestamos/'+id, 'DELETE','')
    request.onload = function (){
        mostrarPrestamos();
    }
}
function guardarPrestamos (){
    let nom = document.getElementById('nombres-n').value // se le dice a la funcion de guardar clientes que se va editar nombres-n (esto se llamo en el formulario)
    let ape = document.getElementById('apellidos-a').value
    let doc = document.getElementById('documento-do').value
    let ema = document.getElementById('email-e').value
    let tel = document.getElementById('telefono-t').value
    let dir = document.getElementById('direccion-d').value
    let tip = document.getElementById('tituloPrestamo-ti').value
    let fechpr = document.getElementById('fechaDePrestamo-f').value
    let fechen = document.getElementById('fechaDeEntrega-fe').value
    let entrlib = document.getElementById('entregaLibro-el').value 
    let estlib = document.getElementById('estadoPrestamo-ep').value 
    let ciu = document.getElementById('ciudad-c').value
     
    let data = {
        'nombres':nom,
        'apellidos':ape,
        'documento':doc,
        'email':ema,
        'telefono':tel,
        'direccion':dir,
        'tituloPrestamo':tip,
        'fechaDePrestamo':fechpr,
        'fechaDeEntrega':fechen,
        'entregaLibro':entrlib,
        'estadoPrestamo':estlib,
        'ciudad':ciu,} // primero se coloca el nombre que se le coloco en el modelo y luego el nombre de funcion que se le dio arriba 
        
        console.log(data);    
    let request =sendRequest('prestamos/', 'POST', data);
    request.onload = function () {
        window.location = 'prestamos.html'
    }
  request.onerror = function (){
        alert("Error al Guardar los datos")
    }
}
function cargarDatos (id){
    let request = sendRequest('prestamos/'+id, 'GET', '' );
    let nom = document.getElementById('nombres-n')
    let ape = document.getElementById('apellidos-a')
    let doc = document.getElementById('documento-do')
    let ema = document.getElementById('email-e')
    let tel = document.getElementById('telefono-t')
    let dir = document.getElementById('direccion-d')
    let tip = document.getElementById('tituloPrestamo-ti')
    let fechpr = document.getElementById('fechaDePrestamo-f')
    let fechen = document.getElementById('fechaDeEntrega-fe')
    let entrlib = document.getElementById('entregaLibro-el')
    let estlib = document.getElementById('estadoPrestamo-ep')
    let ciu = document.getElementById('ciudad-c')

    

    request.onload = function(){
        let data = request.response;
        nom.value = data.nombres
        ape.value = data.apellidos
        doc.value = data.documento
        ema.value = data.email
        tel.value = data.telefono
        dir.value = data.direccion
        tip.value = data.tituloPrestamo
        fechpr.value = data.fechaDePrestamo
        fechen.value = data.fechaDeEntrega
        entrlib.value = data.entregaLibro
        estlib.value = data.estadoPrestamo
        ciu.value = data.ciudad
      
        console.log(data)
    }
    request.onerror = function(){
        alert("Error al guardar los datos")         
    }  
}

function modificarPrestamos(id){
    let nom = document.getElementById('nombres-n').value // se le dice a la funcion de guardar clientes que se va editar nombres-n (esto se llamo en el formulario)
    let ape = document.getElementById('apellidos-a').value
    let doc = document.getElementById('documento-do').value
    let ema = document.getElementById('email-e').value
    let tel = document.getElementById('telefono-t').value
    let dir = document.getElementById('direccion-d').value
    let tip = document.getElementById('tituloPrestamo-ti').value
    let fechpr = document.getElementById('fechaDePrestamo-f').value
    let fechen = document.getElementById('fechaDeEntrega-fe').value
    let entrlib = document.getElementById('entregaLibro-el').value 
    let estlib = document.getElementById('estadoPrestamo-ep').value 
    let ciu = document.getElementById('ciudad-c').value
     
    let data = {
        'nombres':nom,
        'apellidos':ape,
        'documento':doc,
        'email':ema,
        'telefono':tel,
        'direccion':dir,
        'tituloPrestamo':tip,
        'fechaDePrestamo':fechpr,
        'fechaDeEntrega':fechen,
        'entregaLibro':entrlib,
        'estadoPrestamo':estlib,
        'ciudad':ciu,}

    let request = sendRequest('prestamos/'+id, 'PUT', data);
    console.log(request)
    request.onload = function(){
        window.location = 'prestamos.html'
    }
    request.onerror = function(){
        alert("Error al modificar los datos")
    }
}



