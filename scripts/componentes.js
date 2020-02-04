$(document).ready( function(){
    
getData()
deleteButton()
modifyButton()

});

function deleteButton(){

    $(document).on('click','#botonBorrar',function(){
        let idObjeto = $(this).parent().attr('id');
        deleteData(idObjeto)
    })
}
function modifyButton(){
    $('.modal').on('shown.bs.modal', function () {
        $('#botonModificar').trigger('focus')
      })
}