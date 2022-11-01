import { Provider } from 'react-redux'
import { store } from '../store'
import '../styles/globals.css'
import 'swiper/css';
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
