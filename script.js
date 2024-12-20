//JSON
const pokemon = [
    {
        id: 1,
        nombre: "Squirtle",
        tipo: "Agua",
        entrenador: "img/rojo.png",
        pokemon: "img/squirtle.png",
        movimiento: "Aqua cola",
        nivel: 15,
        region: "Kanto"
    },
    {
        id: 2,
        nombre: "Cyndaquil",
        tipo: "Fuego",
        entrenador: "img/jimmy.png",
        pokemon: "img/cyndaquil.png",
        movimiento: "Lanzallamas",
        nivel: 15,
        region: "Johto"
    },
    {
        id: 3,
        nombre: "Treecko",
        tipo: "Planta",
        entrenador: "img/sabino.png",
        pokemon: "img/treecko.png",
        movimiento: "Hierba lazo",
        nivel: 15,
        region: "Hoenn"
    },
    {
        id: 4,
        nombre: "Turtwig",
        tipo: "Planta",
        entrenador: "img/maya.png",
        pokemon: "img/turtwig.png",
        movimiento: "Hoja afilada",
        nivel: 15,
        region: "Sinnoh"
    },
    {
        id: 5,
        nombre: "Oshawott",
        tipo: "Agua",
        entrenador: "img/ash.png",
        pokemon: "img/oshawott.png",
        movimiento: "Concha filo",
        nivel: 15,
        region: "Teselia"
    },
    {
        id: 6,
        nombre: "Froakie",
        tipo: "Agua",
        entrenador: "img/ash.png",
        pokemon: "img/froakie.png",
        movimiento: "Surf",
        nivel: 15,
        region: "Kalos"
    }
];

const tabla = document.getElementById("tabla");
const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
    TablaPokemon();
    pokemonVacio();
});


function TablaPokemon() {

    const h1 = document.createElement("h1");
    h1.innerHTML = "Pokémon";

    // Variables a crear dentro de la tabla
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const trhead = document.createElement("tr");
    const tbody = document.createElement("tbody");


    tabla.innerHTML = "";


    for (const key in pokemon[0]) {
        const th = document.createElement("th");
        th.innerHTML = key;
        trhead.appendChild(th);
    }


    const thEliminar = document.createElement("th");
    thEliminar.innerHTML = "Eliminar";
    trhead.appendChild(thEliminar);

    const thActualizar = document.createElement("th");
    thActualizar.innerHTML = "Actualizar";
    trhead.appendChild(thActualizar);

    const thAgregar = document.createElement("th");
    thAgregar.innerHTML = "Agregar";
    trhead.appendChild(thAgregar);

    thead.appendChild(trhead);
    tabla.appendChild(thead);


    pokemon.forEach((poke, index) => {
        const tr = document.createElement("tr");

        for (const key in poke) {
            const td = document.createElement("td");
            if (key === "pokemon" || key === "entrenador") {
                const img = document.createElement("img");
                img.src = poke[key];
                td.appendChild(img);
            } else {
                td.innerHTML = poke[key];
            }
            tr.appendChild(td);
        }

        // Botón Eliminar
        const tdEliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.addEventListener("click", (e) => {
            e.preventDefault();
            eliminarPokemonConConfirmacion(index); 
        });
        tdEliminar.appendChild(botonEliminar);
        tr.appendChild(tdEliminar);

        // Botón Actualizar
        const tdActualizar = document.createElement("td");
        const botonActualizar = document.createElement("button");
        botonActualizar.innerHTML = "Actualizar";
        botonActualizar.addEventListener("click", (e) => {
            e.preventDefault();
            container.innerHTML = "";
            formEditarPokemon(index)
        });
        tdActualizar.appendChild(botonActualizar);
        tr.appendChild(tdActualizar);

        // Botón Agregar
        const tdAgregar = document.createElement("td");
        const botonAgregar = document.createElement("button");
        botonAgregar.innerHTML = "Agregar";
        botonAgregar.addEventListener("click", (e)=> {
            e.preventDefault();
            container.innerHTML= "";    
            formAgregarPokemon(index);
        });
        tdAgregar.appendChild(botonAgregar);
        tr.appendChild(tdAgregar);

        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    container.appendChild(h1);
    container.appendChild(tabla);
    pokemonVacio();
}

function formAgregarPokemon(indice) {
    container.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.innerHTML = "Agregar Pokémon";

    const form = document.createElement("form");

    // Nombre
    const labelNombre = document.createElement("label");
    labelNombre.innerHTML = "Nombre";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";

    // Tipo
    const labelTipo = document.createElement("label");
    labelTipo.innerHTML = "Tipo";
    const inputTipo = document.createElement("input");
    inputTipo.type = "text";

    // Entrenador
    const labelEntrenador = document.createElement("label");
    labelEntrenador.innerHTML = "Entrenador";
    const inputEntrenador = document.createElement("input");
    inputEntrenador.type = "file";

    // Pokémon Imagen
    const labelPokemon = document.createElement("label");
    labelPokemon.innerHTML = "Imagen Pokémon";
    const inputPokemon = document.createElement("input");
    inputPokemon.type = "file";

    // Movimiento
    const movimientosPokemon = [
        "Rayo",
        "Terremoto",
        "Hidro Bomba",
        "Garra Dragón",
        "Rayo Hielo",
        "Lanzallamas",
        "Bola Sombra",
        "Psíquico",
        "Hiperrayo",
        "Rayo Solar",
        "Látigo Cepa",
        "Doble Patada",
        "Acua Jet",
        "Testarazo",
        "Desarme",
        "Viento Afín",
        "Protección",
        "Escaldar",
        "Avalancha",
        "Tóxico",
        "Corte"
    ];
    
    const labelMovimiento = document.createElement("label");
    labelMovimiento.innerHTML = "Movimiento";
    const contenedorMovimientos = document.createElement("div");

    movimientosPokemon.forEach(movimiento => {
        const checkboxContainer = document.createElement("div");
        const inputMovimiento = document.createElement("input");
        inputMovimiento.type = "checkbox";
        inputMovimiento.value = movimiento;
        inputMovimiento.id = `mov-${movimiento}`;
    
        const labelCheckbox = document.createElement("label");
        labelCheckbox.htmlFor = `mov-${movimiento}`;
        labelCheckbox.innerHTML = movimiento;
    
        checkboxContainer.appendChild(inputMovimiento);
        checkboxContainer.appendChild(labelCheckbox);
    
        contenedorMovimientos.appendChild(checkboxContainer);
    })

    // Nivel
    const labelNivel = document.createElement("label");
    labelNivel.innerHTML = "Nivel";
    const inputNivel = document.createElement("input");
    inputNivel.type = "number";

    // Región
    const labelRegion = document.createElement("label");
    labelRegion.innerHTML = "Región";
    const inputRegion = document.createElement("select");

    const regionesPokemon = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Teselia", "Kalos", "Alola", "Galar"];
    regionesPokemon.forEach(region => {
        const option = document.createElement("option");
        option.value = region;
        option.innerHTML = region;
        inputRegion.appendChild(option);
    });

    // Botón Agregar
    const botonAgregar = document.createElement("button");
    botonAgregar.innerHTML = "Agregar";
    botonAgregar.type = "submit";

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const movimientosSeleccionados = [];
        contenedorMovimientos.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
            movimientosSeleccionados.push(checkbox.value);
        });
    
        agregarPokemon(
            inputNombre.value, 
            inputTipo.value, 
            inputEntrenador.files[0], 
            inputPokemon.files[0], 
            movimientosSeleccionados,
            inputNivel.value, 
            inputRegion.value
        );
    });
    

    // Botón Volver
    const botonVolver = document.createElement("button");
    botonVolver.innerHTML = "Volver";
    botonVolver.type = "button";
    botonVolver.addEventListener("click", () => {
        container.innerHTML = "";
        TablaPokemon();
    });

    // Agregar al formulario
    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTipo);
    form.appendChild(inputTipo);
    form.appendChild(labelEntrenador);
    form.appendChild(inputEntrenador);
    form.appendChild(labelPokemon);
    form.appendChild(inputPokemon);
    form.appendChild(labelMovimiento);
    form.appendChild(contenedorMovimientos);
    form.appendChild(labelNivel);
    form.appendChild(inputNivel);
    form.appendChild(labelRegion);
    form.appendChild(inputRegion);
    form.appendChild(botonAgregar);
    form.appendChild(botonVolver);

    container.appendChild(h1);
    container.appendChild(form);

}



function formEditarPokemon(indice) {

    const h1 = document.createElement("h1");
    h1.innerHTML = "Editar Pokémon";

    const form = document.createElement("form");
    const poke = pokemon[indice];

    // Nombre
    const labelNombre = document.createElement("label");
    labelNombre.innerHTML = "Nombre";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.value = poke.nombre;

    // Tipo
    const labelTipo = document.createElement("label");
    labelTipo.innerHTML = "Tipo";
    const inputTipo = document.createElement("input");
    inputTipo.type = "text";
    inputTipo.value = poke.tipo;

    // Entrenador (Imagen)
    const labelEntrenador = document.createElement("label");
    labelEntrenador.innerHTML = "Imagen Entrenador";
    const inputEntrenador = document.createElement("input");
    inputEntrenador.type = "file";

    // Pokémon (Imagen)
    const labelPokemon = document.createElement("label");
    labelPokemon.innerHTML = "Imagen Pokémon";
    const inputPokemon = document.createElement("input");
    inputPokemon.type = "file";

    // Nivel
    const labelNivel = document.createElement("label");
    labelNivel.innerHTML = "Nivel";
    const inputNivel = document.createElement("input");
    inputNivel.type = "number";
    inputNivel.value = poke.nivel;

    // Botón Editar
    const botonEditar = document.createElement("button");
    botonEditar.innerHTML = "Guardar Cambios";
    botonEditar.type = "submit";

    // Botón Volver
    const botonVolver = document.createElement("button");
    botonVolver.innerHTML = "Volver";
    botonVolver.type = "button";
    botonVolver.addEventListener("click", () => {
        container.innerHTML = "";
        TablaPokemon();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        editarPokemon(
            indice, 
            inputNombre.value, 
            inputTipo.value, 
            inputEntrenador.files[0], 
            inputPokemon.files[0], 
            inputNivel.value
        );
    });

    // Agregar elementos al formulario
    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTipo);
    form.appendChild(inputTipo);
    form.appendChild(labelEntrenador);
    form.appendChild(inputEntrenador);
    form.appendChild(labelPokemon);
    form.appendChild(inputPokemon);
    form.appendChild(labelNivel);
    form.appendChild(inputNivel);
    form.appendChild(botonEditar);
    form.appendChild(botonVolver);

    container.appendChild(h1);
    container.appendChild(form);
}


function editarPokemon(indice, nombre, tipo, entrenadorFile, pokemonFile, nivel) {
    const poke = pokemon[indice];

    poke.nombre = nombre;
    poke.tipo = tipo;
    poke.nivel = parseInt(nivel);

    if (entrenadorFile) {
        poke.entrenador = URL.createObjectURL(entrenadorFile);
    }
    if (pokemonFile) {
        poke.pokemon = URL.createObjectURL(pokemonFile);
    }

    container.innerHTML = "";
    TablaPokemon();
}



function eliminarPokemon(indice) {
    pokemon.splice(indice, 1); 
    container.innerHTML = ""; 
    TablaPokemon(); 
}



function agregarPokemon(nombre, tipo, entrenador, pokemonImg, movimientos, nivel, region) {
    const nuevoPokemon = {
        id: pokemon.length + 1,
        nombre: nombre,
        tipo: tipo,
        entrenador: entrenador ? URL.createObjectURL(entrenador) : "img/default.png",
        pokemon: pokemonImg ? URL.createObjectURL(pokemonImg) : "img/default.png",
        movimiento: movimientos.join(", "),
        nivel: parseInt(nivel),
        region: region
    };

    pokemon.push(nuevoPokemon);
    container.innerHTML = "";
    TablaPokemon();
}


function pokemonVacio() {
    if (pokemon.length === 0) {
        container.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerHTML = "No hay Pokémon registrados, recargue la página";
        container.appendChild(h1);
    }

}

function eliminarPokemonConConfirmacion(indice) {
    container.innerHTML = "";


    const p = document.createElement("p");
    p.innerHTML = `¿Seguro que quieres eliminar a ${pokemon[indice].nombre}?`;


    const botonSi = document.createElement("button");
    botonSi.innerHTML = "Sí";
    botonSi.type = "button";
    botonSi.addEventListener("click", (e) => {
        e.preventDefault();
        eliminarPokemon(indice); 
        container.innerHTML = "";
        TablaPokemon(); 
    });

    // Botón "No"
    const botonNo = document.createElement("button");
    botonNo.innerHTML = "No";
    botonNo.type = "button";
    botonNo.addEventListener("click", (e) => {
        e.preventDefault();
        container.innerHTML = ""; 
        TablaPokemon(); 
    });

    // Añadir elementos al contenedor
    container.appendChild(p);
    container.appendChild(botonSi);
    container.appendChild(botonNo);
}

