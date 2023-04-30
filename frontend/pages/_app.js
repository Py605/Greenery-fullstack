import '../styles/404.css';
import '../styles/add-plant.css';
import Navbar from '../components/Navbar';
import '../styles/navbar.css';
import '../styles/home.css';
import '../styles/plants.css';
import '../styles/blogs.css';
//import '../styles/cart.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from '@/Redux/ProductStore';
import Cart from '@/components/Cart';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
     <Provider store={store}>
      <Navbar />
      
      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
