const pokemonNameService = (httpClient) => {
    const getPokemonByName = (name) => httpClient.get(`/pokemon/${name}`);

    return {
        getPokemonByName
    }
};

export default pokemonNameService;
