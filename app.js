const searchForm = document.getElementById('searchForm');
const textInput = document.getElementById('textInput');
const pokemonName = document.getElementById('pokemonName');
const image = document.getElementById("image");
const pokemonTypes = document.getElementById("pokemonTypes");

const getPokeApi = async (id) => {
    try {
        const config = { headers: {Accept:'application/json'} };
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, config);
        
        //Gets name and appends to H2
        appendPokeName(res.data.name);
        
        //Gets artwork and appends to body
        appendPokemonSprite(res.data.sprites.other['official-artwork'].front_default);

        //Gets Pokemon Type
        appendPokemonTypes(res.data.types);

    } catch (e) {
        console.log("Error", e);
    }
};

function appendPokeName(name)
{
    const capitalFirstChar = capitaliseFirstChar(name);
    pokemonName.append(capitalFirstChar);
}

function appendPokemonSprite(sprite)
{
    image.src = sprite;
}

function appendPokemonTypes(typesObject)
{
    for (let types of typesObject)
    {
        console.log(types.type.name);

        const typeName = types.type.name;
        const capitalFirstChar = capitaliseFirstChar(typeName);
        const newLi = document.createElement("li");
        newLi.textContent = capitalFirstChar;
        pokemonTypes.append(newLi);
    }
}

function capitaliseFirstChar(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    pokemonName.textContent = "";
    pokemonTypes.textContent = "";
    image.src = "";
    const id = parseInt(textInput.value.trim(), 10);
    getPokeApi(id);
    textInput.value = "";
});