const searchForm = document.getElementById('searchForm');
const textInput = document.getElementById('textInput');
const pokemonName = document.getElementById('pokemonName');
const image = document.getElementById("image")

const getPokeApi = async (id) => {
    try {
        const config = { headers: {Accept:'application/json'} };
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data.name);
        
        //Gets name and appends to H2
        const text = res.data.name
        pokemonName.append(text);
        
        //Gets artwork and appends to body
        const artwork = res.data.sprites.other['official-artwork'].front_default;
        image.src = artwork;
    } catch (e) {
        console.log("Error", e);
    }
};



searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    pokemonName.textContent = "";
    image.src = "";
    const id = parseInt(textInput.value.trim(), 10);
    getPokeApi(id);
    textInput.value = "";    
});


