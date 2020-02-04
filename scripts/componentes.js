$(document).ready( function(){
    
getData()
añadirBoton()

});

function añadirBoton(){

    $(document).on('click','#botonBorrar',function(){
        let idObjeto = $(this).parent().attr('id');
        deleteData(idObjeto)
    })
}