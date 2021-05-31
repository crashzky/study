import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/reducer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}