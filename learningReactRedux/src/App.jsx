import React from 'react';
import Home from './Home';
import Create from './Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/create' element={<Create/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App