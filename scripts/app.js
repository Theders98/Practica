$(document).ready(function () {
    let lastId = 0;
    showData()
    deleteButton()
    modifyButton()
    addButton()

    function showData() {

        //recorre la promesa y trae los datos del json
        peticionGlobal("GET", "peliculas").done(function (data) {

        // data sería lo retornado por la peticion get| "i" seria el identificador de posicion | peliculas sería la variable contenedora
            $.each(data,function(i,peliculas){

                let idSelec = parseInt(peliculas.id)
                if (idSelec >= lastId) { lastId = idSelec }
                
                $("#content").append(

                    `
                <tr id="${peliculas.id}"> 

                        <td>${peliculas.nombre}</td>
                        <td>${peliculas.director}</td>
                        <td>${peliculas.clasificacion}</td>
                        <td><button id='botonBorrar' class = 'btn btn-outline-danger'>Borrar pelicula</button></td>
                        <td><button id='botonModificar' class = 'btn btn-outline-warning'>Modificar pelicula</button></td>                   
                         
                </tr>             
                     `
                )
            }) 
            
        });

        peticionGlobal("GET", "clasificaciones", "", "").done(function (data) {
            $.each(data,function(i,clasificaciones) {

                $("#select_box").append(

                    `
                    <option>${clasificaciones.nombre}</option>

                    `
            )
            })
        })
        //aqui se usan los metodos, que administran las peticiones, realmente los pongo aqui porque quiero, no hay ninguna razón lógica
    }

    function deleteButton() {

        $(document).on('click', '#botonBorrar', function () {

            //esto selecciona la id del objeto abuelo para obtener la id del tr que es el que contiene todos los datos del get
            let idObjeto = $(this).parent().parent().attr('id');

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

              // esta es una manera de hacerlo autoincremental, se basa en obtener el valor mas alto de las id que han pasado por el get y sumarle 1 cuando entre al añadir
            lastId++

            $('#form_id').val(lastId)

            $('#enviar').click(function () {

                //peticion con done y con funcionalidad para hacer desaparecer el formulario

                peticionGlobal("POST", "peliculas", "", $('#formData').serialize())
                    .done()
            })
        })
    }
})
