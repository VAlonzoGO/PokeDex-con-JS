
const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeSearch");
    let pokeSearch = pokeNameInput.value;
    pokeSearch = pokeSearch.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/sad-pikachu.gif")
            alert("Intentalo de nuevo!")
        }
        else {
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeName = data.name;
        let idPokemon = data.id;
        const info = data.stats;
        let hpPokemon = info[0].base_stat;
        let AtackPokemon = info[1].base_stat;
        let defensePokemon = info[2].base_stat;
        
        

        pokeImage(pokeImg);
        pokename(pokeName);
        pokeId(idPokemon);
        pokeHp(hpPokemon);
        pokeAtack(AtackPokemon);
        pokeDefense(defensePokemon);
    }
}

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