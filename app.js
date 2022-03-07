const fetchPokemon = () =>{
    const gePokemonurl = id => 'https://pokeapi.co/api/v2/pokemon/${id}'  
    const pokemonPromises = []
    
    for (let i = 1; i <= 150; i++){
        pokemonPromises.push()
        fech(getPokemonurl(i)).then(response => response.json()) 
    }
    /*  °função que busca pokemon, fuch é uma requisição em javascrip 
        °
    */
}
 
fetchPokemon() 