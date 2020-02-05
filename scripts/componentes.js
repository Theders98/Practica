$(document).ready(function () {
    let lastId = 0;
    $('#formData').hide();
    showData()



    function showData() {

        //recorre la promesa y trae los datos del json
        getDataAlternativa().done(function (data) {

            for (let i = 0; i < data.length; i++) {
                if (data[i].id >= lastId) { lastId = data[i].id }
                $("#content").append(

                    `
                <tr id="${data[i].id}"> 

                        <td>${data[i].nombre}</td>
                        <td>${data[i].director}</td>
                        <td>${data[i].clasificacion}</td>
                        <td><button id='botonBorrar' class = 'borrar'>Borrar pelicula</button></td>
                        <td><button id='botonModificar' class = 'modificar'>Modificar pelicula</button></td>                   
                         
                </tr>             
            `
                )
            }
        });
        //aqui se usan los metodos, que administran las peticiones, realmente los pongo aqui porque quiero, no hay ninguna razón lógica
        deleteButton()
        modifyButton()
        addButton()
    }
    function deleteButton() {

        $(document).on('click', '#botonBorrar', function () {
            //esto selecciona la id del objeto abuelo para obtener la id del tr que es el que contiene todos los datos del get
            let idObjeto = $(this).parent().parent().attr('id');

            //peticion de delete, solo le pasamos la id
            deleteData(idObjeto)

        })
    }
    function modifyButton() {

        $(document).on('click', '#botonModificar', function () {
            //esto selecciona la id del objeto abuelo para obtener la id del tr que es el que contiene todos los datos del get
            let idObjeto = $(this).parent().parent().attr('id');
            $('.form__id').val(idObjeto)
            $('#formData').show();
            $('#addFilmBttn').hide();

            $('.enviar').click(function () {

                putData(idObjeto, $('#formData').serialize()).done(function () {
                    console.log('xd')
                    $('#formData').hide();
                    $('#addFilmBttn').show();
                })

            })

        })
    }
    //Añade funcionalidades al formulario de añadir un elemento al json
    function addButton() {

        $('#addFilmBttn').click(function () {

            $('#formData').show();
            $('#addFilmBttn').hide();

            $('.enviar').click(function () {
                // esta es una manera de hacerlo autoincremental, se basa en obtener el valor mas alto de las id que han pasado por el get y sumarle 1 cuando entre al añadir
                lastId++
                //Aqui junto el formulario serializado junto a la id sumada
                let data = `id=${lastId++}&` + "" + $('#formData').serialize()

                //peticion con done y con funcionalidad para hacer desaparecer el formulario
                postData(data).done(function () {
                    alert('añadido con exito')
                    $('#formData').hide();
                    $('#addFilmBttn').show();
                })

            })


        })
    }
})
