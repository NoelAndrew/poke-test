/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { pokemonService } from '../../services';
import Navbar from "../../components/atoms/navbar";
import Buscador from "../../components/organisms/buscador";
const MyPokemon = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { pokemonId } = router.query
        if (pokemonId) {
            pokemonService.getPokemonById(pokemonId)
            .then(({ data }) => {
                setPokemon(data);
            })
            .catch((error) => {
                setIsError(true);
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
        }

    }, [router]);

    if (isLoading) {
        return <><p> Está cargando...</p></>
    }

    if (isError) {
        return <><p>{error}</p></>
    }


return (
   <>
    <div className="main-content">
        <div className="navbar">
            <Navbar/>
        </div>
        <a href="../">
        <img
            alt="buscar"
            src="/iconos/Back.svg"
            width={50}
            height={50}
            className="back"
        />
        </a>
        <div className="stats-container">
            <div className="poke-container">
                <div className="card">
                    <img 
                        src={pokemon.sprites.other['official-artwork'].front_default} 
                        alt="my-pokemon" 
                        width={150}
                        height={150}
                    />
                </div>
                <div className="fronts">
                    <img
                        alt="pokemon"
                        src={pokemon.sprites.front_default}
                        width={50}
                        height={50}
                    />
                    <img
                        alt="pokemon"
                        src={pokemon.sprites.back_default}
                        width={50}
                        height={50}
                        />
                    </div>
            </div>
        </div>
        <div className="buscador-slug">
            <Buscador/>
        </div>
        <div  className="poke-container-slug">
            <div>
                <p className="poke-title-slug">{pokemon.name.toUpperCase()}</p>
                <p className="type">{pokemon.types.map(({ type }) => type.name).join(" ")}</p>
            </div>
            <div className="slug-container">
                <span className="poke-subtitle-slug">Pokedex Number </span>
                <p>{pokemon.id}</p>
            </div>
            <div className="slug-container">
                <span className="poke-subtitle-slug">Height</span>
                <p>{pokemon.height}</p>
            </div>
            <div className="slug-container">
                <span className="poke-subtitle-slug">Weight</span>
                <p>{pokemon.weight}</p>
            </div>
            <div>
                <p className="poke-subtitle-slug">Shiny</p>
                <img
                    alt="pokemon"
                    src={pokemon.sprites.front_shiny}
                    width={100}
                    height={100}
                />
                <img
                    alt="pokemon"
                    src={pokemon.sprites.back_shiny}
                    width={100}
                    height={100}
                />
            </div>
        </div>
    </div>
    </>
)

};

export default MyPokemon;