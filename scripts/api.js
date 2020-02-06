
//Con este metodo de hacer la peticion retornamos la promesa y la recorremos desde el otro js usando el .done(), en teoria este es el metodo mas nuevo y el mas usado
//Y sustituyó al otro metodo de hacer las peticiones

function peticionGlobal(tipo, recurso, id="", data="") {
   // alert(tipo+"|"+recurso+"|"+id+"|"+data)
    if (tipo == "POST" | tipo == "PUT") { 
        return $.ajax({
            type: tipo,
            url: `http://localhost:3000/${recurso}/${id}`,
            data: data,
            dataType: "JSON"
 
        })
    } else {
        return $.ajax({
            type: tipo,
            url: `http://localhost:3000/${recurso}/${id}`,
           dataType: "JSON"
        })
    }
}
// function ajaxPetition(type, id = null, data = null, dataType = null, contentData = null) {
//     let urlPet = "http://localhost:3000/productos";
//     (id == null) ? urlPet = "http://localhost:3000/productos" : urlPet = "http://localhost:3000/productos/" + id;

//     let peticion = $.ajax({
//         type: type,
//         url: urlPet,
//         data: data,
//         dataType: dataType,
//         contentData: contentData
//     });
//     return peticion;
// }
