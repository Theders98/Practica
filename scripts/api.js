
//Peticion que actua como todas, el tipo es el tipo de dato que insertas, recurso es la ruta a la que vas a hacer la peticion
//id es si se solicita id la pides, si no la insertas es vacio, data son los datos a insertar

function peticionGlobal(tipo, recurso, id="", data="") {
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