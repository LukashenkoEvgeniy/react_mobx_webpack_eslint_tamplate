import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/AppComponent.jsx';
import {Provider} from 'mobx-react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import '../styles/App.scss';


render(
    <Provider>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/AppComponent.jsx', () => {

        render(
            <Provider>
                <AppContainer>
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    });
}
