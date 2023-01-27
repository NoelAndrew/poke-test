import { useEffect, useState } from "react";
import { pokemonService } from '../services';

const MyPokemon = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        pokemonService.getPokemonById(2).then(({ data }) => {
            setPokemon(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <><p style={{ color: 'white' }}> Está cargando... </p> </>
    }

    return <><p style={{ color: 'white' }}>
        {JSON.stringify(pokemon, null, 4)}
    </p> </>

};

export default MyPokemon;
