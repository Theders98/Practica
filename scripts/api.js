
function postData(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}

function getData(){
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/peliculas",
    success: function (data) {

        for (let i = 0; i < data.length; i++) {

            $("#content").append( 
                
                `<div id="${data[i].id}">
                     <tr> 
                        <td>Nombre: ${data[i].nombre}</td>
                        <td>Director:  ${data[i].director}</td>
                        <td>Clasificacion:  ${data[i].clasificacion}</td>
                        <td><button id='botonBorrar' class = 'borrar'>Borrar pelicula</button></td>
                        <td><button id='botonModificar' class = 'modificar'>Modificar pelicula</button></td>
                     </tr>
                </div>
            `
            )
        }
    }
})
}

function deleteData(data){
  $.ajax({ 
    type: "DELETE", 
    url: `http://localhost:3000/peliculas/${data}`, 
    success: function () {
        alert('Borrado con exito')
    }
})
}

function putData(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}

