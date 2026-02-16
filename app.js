//https://pokeapi.co/api/v2/pokemon/
const searchForm = document.getElementById('searchForm');
const textInput = document.getElementById('textInput');
const button = document.getElementById('searchButton');
const pokemonName = document.getElementById('pokemonName');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    pokemonName.textContent = "";
    const text = textInput.value;
    pokemonName.append(text);
});