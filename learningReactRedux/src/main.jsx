import React from "react";;
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import './index.css'
import UserReducer from "./UserReducer";

const store = configureStore({
    reducer: {
        user: UserReducer
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)