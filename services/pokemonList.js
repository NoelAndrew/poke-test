const getPokemonList = (httpClient) => {
    const getPokemon= () => httpClient.get(`/pokemon/`);

    return {
        getPokemon,
    }

};

export default getPokemonList;
