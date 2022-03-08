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

            const listpokemons = pokemons.reduce((accumulator, pokemon) =>{ 
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)


                accumulator += 
                `<li class="card">
                <img class="card-image ${types[0]}" alt="${pokemon.name}src="https://pokeres.bastionbot.org/imagens/pokemon/${pokemon.id}.png"/>
               <h2 class="card-title">${pokemon.id}. ${pokemon.name} </h2> 
                <p class="card-subtitle">${types.join('|')}</p>
                   <li>`
                return accumulator

            }, '')

            console.log(listpomons)
        })

}
 
fetchPokemon() 