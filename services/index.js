import pokemonServiceFactory from './pokemon';
import axios from 'axios';
import getPokemonList from './pokemonList';
import pokemonNameService from './pokeName';

const client = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export const pokeServiceName = pokemonNameService(client)
export const pokemonService = pokemonServiceFactory(client)
export const pokemonListService = getPokemonList(client)