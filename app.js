const fetchPokemon = () =>{
    const getPokemonurl = id => 'https://pokeapi.co/api/v2/pokemon/${id}' 

    const pokemonPromises = []
    
    for (let i = 1; i <= 150; i++){
    
        pokemonPromises.push(fech(getPokemonurl(i)).then(response => response.json()) )
    }
    /*  °função que busca pokemon, fuch é uma requisição em javascrip 
        °metodo estatico
        °reduzir o array em uma string ( reduce)
    */

        Promise.all(pokemonPromises)
        .then(pokemons => {
           // console.log(pokemons)

            const listpomons = pokemons.reduce((accumulator, pokemon) =>{
                accumulator += `<li class="card">
                     
               <h2 class="card-title">${pokemon.id}. ${pokemon.name} </h2> 
                <p class="card-subtitle">${pokemon.types}</p>
                   <li>`
                return accumulator

            }, '')

            console.log(listpomons)
        })

}
 
fetchPokemon() 