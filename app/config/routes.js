// Include the React library
let React = require("react");

import {Route, BrowserRouter} from 'react-router-dom';
// Reference the high-level components
import Main from '../components/Main';
import Search from '../components/children/Search';
import Saved from '../components/children/Saved';
import Results from '../components/children/Result';

// Export the Routes
module.exports = (

    // The high level component is the Router component
    <BrowserRouter>

        <Main path="/">
            <Search path="search" setTerm={this.setTerm}/>
            <Saved path="saved"/>
            <Results path="results" articles={this.state.results}/>
        </Main>
    </BrowserRouter>

);
