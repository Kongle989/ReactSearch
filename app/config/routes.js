// Include the React library
let React = require("react");

import {Route, BrowserRouter} from 'react-router-dom';
// Reference the high-level components
import Main from '../components/Main';
import Search from '../components/Search';
import Saved from '../components/Saved';

// Export the Routes
module.exports = (

    // The high level component is the Router component
    <BrowserRouter>

        <Main path="/">
            <Search path="search"/>
            <Saved path="saved"/>
        </Main>
    </BrowserRouter>

);
