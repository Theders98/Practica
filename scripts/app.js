$(document).ready(function () {
    let lastId = 0;
    showData()
    deleteButton()
    modifyButton()
    addButton()

    function showData() {

        //recorre la promesa y trae los datos del json
        peticionGlobal("GET", "peliculas").done(function (data) {

            for (let i = 0; i < data.length; i++) {

                let idSelec = parseInt(data[i].id)
                console.log(idSelec)
                if (idSelec >= lastId) { lastId = idSelec }
                $("#content").append(

                    `
                <tr id="${data[i].id}"> 

                        <td>${data[i].nombre}</td>
                        <td>${data[i].director}</td>
                        <td>${data[i].clasificacion}</td>
                        <td><button id='botonBorrar' class = 'btn btn-outline-danger'>Borrar pelicula</button></td>
                        <td><button id='botonModificar' class = 'btn btn-outline-warning'>Modificar pelicula</button></td>                   
                         
                </tr>             
            `
                )
            }
        });
        peticionGlobal("GET", "clasificaciones", "", "").done(function (data) {
            for (let i = 0; i < data.length; i++) {

                $("#select_box").append(

                    `
                    <option>${data[i].nombre}</option>

                    `
                )
            }
        })
        //aqui se usan los metodos, que administran las peticiones, realmente los pongo aqui porque quiero, no hay ninguna razón lógica
    }
    function deleteButton() {

        $(document).on('click', '#botonBorrar', function () {


            //esto selecciona la id del objeto abuelo para obtener la id del tr que es el que contiene todos los datos del get
            let idObjeto = $(this).parent().parent().attr('id');

            //peticion de delete, solo le pasamos la id
            peticionGlobal("DELETE", "peliculas", idObjeto)

        })
    }
    function modifyButton() {

        $(document).on('click', '#botonModificar', function () {
            //esto selecciona la id del objeto abuelo para obtener la id del tr que es el que contiene todos los datos del get
            let idObjeto = $(this).parent().parent().attr('id');
            //esto rellena el formulario para cuando vaya a ser editado
            peticionGlobal("GET", "peliculas", idObjeto).done(function (data) {
                $('#form_id').val(data.id)
                $('#form_nombre').val(data.nombre)
                $('#form_director').val(data.director)
                $('#select_box').val(data.clasificacion)
            })

            $(".modal").modal("show")


            $('#enviar').click(function () {

                peticionGlobal("PUT", "peliculas", idObjeto, $('#formData').serialize())
                    .done()
            })

        })
    }
    //Añade funcionalidades al formulario de añadir un elemento al json
    function addButton() {

        $('#addFilmBttn').click(function () {

            $(".modal").modal("show")

            lastId++

            $('#form_id').val(lastId)

            $('#enviar').click(function () {
                // esta es una manera de hacerlo autoincremental, se basa en obtener el valor mas alto de las id que han pasado por el get y sumarle 1 cuando entre al añadir
                //Aqui junto el formulario serializado junto a la id sumada

                //peticion con done y con funcionalidad para hacer desaparecer el formulario

                peticionGlobal("POST", "peliculas", "", $('#formData').serialize())
                    .done()
            })
        })
    }
})
