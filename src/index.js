import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
