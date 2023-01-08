//declaramos la funcion que se realiza con el "onclick" del HTML.
const fetchPokemon = async () => {
    //aqui hacemos referencia a lo que buscara la petición.
    const pokeNameInput = document.getElementById("pokeSearch");
    //aqui obtenemos el valor de la referencia anterior
    let pokeSearch = pokeNameInput.value;
    //aqui convertimos a minusculas porque la API funciona solo con minusculas.
    pokeSearch = pokeSearch.toLowerCase();
    //aqui creamos una constante la cual realiza la busqueda en la api con las referencias anteriores
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
    //aqui realizamos la peticion 
    let data = await fetch(url).then((res) => {
    //Aqui si la respuesta de la API es "200" osea que esta mal el valor indicado nos muestra una alerta y un picachu llorando,    
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/sad-pikachu.gif")
            alert("Intentalo de nuevo!")
        }
        else {
    //si la respuesta es favorable nos regresa un JSON almacenado en "data"
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        //aqui partiendo de la respuesta creamos variables para almacenar la informacion que necesitamos mostrar.
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeName = data.name;
        let idPokemon = data.id;
        const info = data.stats;
        let hpPokemon = info[0].base_stat;
        let AtackPokemon = info[1].base_stat;
        let defensePokemon = info[2].base_stat;
        
        
        //aqui llamamos a las variables que creamos mediante constantes.
        pokeImage(pokeImg);
        pokename(pokeName);
        pokeId(idPokemon);
        pokeHp(hpPokemon);
        pokeAtack(AtackPokemon);
        pokeDefense(defensePokemon);
    }
}
//Estas constantes que reaalizamos hacen referencia al tado que reciben de las variables antes creadas
//y los valores que recibe se agreagan al HTML 
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokename = (name) => {
    const pokeDataName = document.getElementById("name");
    pokeDataName.innerText = name;
}

const pokeId = (id) => {
    const pokeDataId = document.getElementById("id");
    pokeDataId.innerText = id;
}

const pokeHp = (base_stat) => {
    const pokeDataHp = document.getElementById("Hp");
    pokeDataHp.innerText = base_stat;
}

const pokeAtack = (base_stat) => {
    const pokeDataHp = document.getElementById("Atack");
    pokeDataHp.innerText = base_stat;
}

const pokeDefense = (base_stat) => {
    const pokeDataHp = document.getElementById("Defense");
    pokeDataHp.innerText = base_stat;
}