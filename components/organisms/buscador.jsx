import PokemonSearch from './PokemonSearch';
import Link from 'next/link';
import { useContext } from 'react';
import { SearchWordContext } from '../../contexts/search-word';
import { useEffect, useState } from 'react';
import { pokemonListService } from '../../services';
import { pokeServiceName } from '../../services';
const Buscador =() => {
    const { state: { searchWord, pokemonFavorites }} = useContext(SearchWordContext);
    const [myPokemons, setMyPokemons] = useState([]);
    const [searchWordLocal, setSerchWordLocal] = useState(null);
    const [pokeData, setPokeData]= useState([]);

    const handleSearch = (searchWordResponse) => {
        const filter = (pokemon) => pokemon.name === searchWordResponse;
        const selectedPokemons = pokeData.filter(filter);
        setMyPokemons(selectedPokemons);
      };
    
    const pokemonList = async () =>{
        let pokeDataApi = await pokemonListService.getPokemon();
        let tempArray = []
        for(let pokeTemp of pokeDataApi.data.results) {
            let PokeNames = await pokeServiceName.getPokemonByName(pokeTemp.name);
            let pokeStruct = { id: PokeNames.data.id,  name: PokeNames.data.name, type: [], img: PokeNames.data.sprites.other['official-artwork'].front_default }
            tempArray.push(pokeStruct)
        }
        setPokeData(tempArray);
      }
    
    useEffect(() => {
        setSerchWordLocal(searchWord);
        pokemonList();
      }, [searchWord, pokemonFavorites]);
return (
    <>
<PokemonSearch pokemonsList={myPokemons} onSearch={handleSearch} />
    <ul>
        {
        pokemonFavorites.map((pokemon, index) => <>
        <li key={index}>{pokemon}</li>
        <Link href={`./pokemons/${pokemon}`}>
        <button>Ver Pokemon</button>
        </Link>
        </>
        )
        }
    </ul>
    </>
)
}
export default Buscador;