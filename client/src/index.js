import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import App from "./components/App";
import createRootReducer from './reducers';
import { configureStore } from 'redux-starter-kit'

//create the browser history to use with connected react router
const history = createBrowserHistory();

//set up the store w/connected router's reducer and the initial contract
const store = configureStore({
    reducer: createRootReducer(history)
})

// pass in the drizzle instance and its options around the standard provider
ReactDOM.render((

    <Provider store={store}>
        <ConnectedRouter history={history} >
            <App history={history}/>            
        </ConnectedRouter>
    </Provider>
), document.getElementById("root"));