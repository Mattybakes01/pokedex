//https://pokeapi.co/api/v2/pokemon/
const searchForm = document.getElementById('searchForm');
const textInput = document.getElementById('textInput');
const pokemonName = document.getElementById('pokemonName');

const getPokeApi = async (id) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("Error", e);
    }
};

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    pokemonName.textContent = "";
    const text = textInput.value;
    pokemonName.append(text);
    textInput.value = "";
    getPokeApi(text);
});