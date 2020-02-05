
function postData(data){
    return $.ajax({
        type: "POST",
        url: "http://localhost:3000/peliculas",
        data: data
      });
}

//Con este metodo de hacer la peticion retornamos la promesa y la recorremos desde el otro js usando el .done(), en teoria este es el metodo mas nuevo y el mas usado
//Y sustituyó al otro metodo de hacer las peticiones

function getDataAlternativa(){
    return  $.ajax({
        type: "GET",
        url: "http://localhost:3000/peliculas",
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

function putData(id, data){
    console.log(JSON.stringify(data))
    return $.ajax({
        type: "PUT",
        url: `http://localhost:3000/peliculas/${id}`,
        data: data
      });
}





// Este emtodo es con succes y esta en desuso
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