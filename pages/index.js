/* eslint-disable @next/next/no-img-element */
import Navbar from '../components/atoms/navbar';
import { pokemonListService, pokeServiceName } from '../services';
import Buscador from '../components/organisms/buscador';

export default function Home({pokeData}) {
  return (
    <div className="main-content">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Buscador/>
        <div className="show-pokemon">
          {
            pokeData.map((poke, index) => {
              return( 
              <>
              <div className="poke-container">
                <a href={`./pokemons/${poke.name}`}>
                  <div className="poke-title">
                      <p>{poke.name}</p>
                  </div>
                  <div className="poke-id">
                    <p className="card-id" key={index}>{poke.id}</p>
                  </div>
                  <div className="card">
                    <img
                      alt="pokemon"
                      src={poke.img}
                      width={100}
                      height={100}
                    />
                  </div>
                </a>
              </div>
              </>)
            })
          }
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  let pokeData = []
  const pokemonList = async () =>{
    let pokeDataApi = await pokemonListService.getPokemon();
    let tempArray = []
    for(let pokeTemp of pokeDataApi.data.results) {
        let PokeNames = await pokeServiceName.getPokemonByName(pokeTemp.name);
        let pokeStruct = { id: PokeNames.data.id,  name: PokeNames.data.name, type: [], img: PokeNames.data.sprites.other['official-artwork'].front_default }
        tempArray.push(pokeStruct)
    }
    pokeData = tempArray;
  }
  await pokemonList();

  return {
    props: {
      pokeData
    },
  };
}