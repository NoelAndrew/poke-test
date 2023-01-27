import '../styles/globals.css'
import { SearchWordProvider } from '../contexts/search-word';

function MyApp({ Component, pageProps }) {
  return (
    <SearchWordProvider>
      <Component {...pageProps} />
    </SearchWordProvider>
  );
}

export default MyApp;