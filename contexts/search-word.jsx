import { createContext, useReducer } from 'react'

const SearchWordContext = createContext();

function searchWordReducer(state, action) {
  switch (action.type) {
    case 'update': {
      return {
        ...state, 
        searchWord: action.searchWord 
      };
    }
    case 'add-pokemon': {
      return { 
        ...state,
        pokemonFavorites: [
          ...state.pokemonFavorites,
          action.pokemon
        ] 
      };
    }
     case 'delete-pokemon': {
      return {
        ...state,
        pokemonFavorites: state.pokemonFavorites.filter(pokemon => pokemon !== action.pokemon)
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function SearchWordProvider({children}) {
  const [state, dispatch] = useReducer(searchWordReducer, {searchWord: '-', pokemonFavorites: []})

  const value = {state, dispatch}
  return <SearchWordContext.Provider value={value}>{children}</SearchWordContext.Provider>
}

export {
    SearchWordProvider,
    SearchWordContext
}