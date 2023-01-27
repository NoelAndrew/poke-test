const pokemonServiceFactory = (httpClient) => {
    const getPokemonById = (id) => httpClient.get(`/pokemon/${id}`);

    return {
        getPokemonById,
    }
};

export default pokemonServiceFactory;
