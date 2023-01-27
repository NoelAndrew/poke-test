import Search from '../molecules/Search';
import Link from 'next/link';
const PokemonItem = ({ index, pokemon }) => {

    return (
        <li key={`my-pokemon-${index}`}>
            {pokemon}
            <Link href={`../pokemons/${pokemon}`}>
                <div>
                    <button className="see-pokemon">Ver Pokemon</button>
                </div>
            </Link>
        </li>
    );
}

const PokemonSearch = ({ pokemonsList, onSearch }) => {
    return (
        <>
            <Search buttonLabel="Busca tu pokemon" onSearch={onSearch} />
            <ul>
                {
                pokemonsList.map((pokemon, index) => 
                    <PokemonItem pokemon={pokemon.name} index={index} key={index} />
                    )
                }
            </ul>
        </>
    );
}

export default PokemonSearch; 