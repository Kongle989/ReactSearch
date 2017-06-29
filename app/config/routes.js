let React = require("react");

import {BrowserRouter} from 'react-router-dom';

import Main from '../components/Main';
import Search from '../components/children/Search';
import Saved from '../components/children/Saved';
import Results from '../components/children/Result';
console.log(Main.valueOf());
// Export the Routes
module.exports = (

    <BrowserRouter>

        <Main path="/">
            <h2>Hey</h2>
            <Search path="search"
                    setTerm={() => Main.setTerm}
                    yell={ () => Main.yell}
            />
            <Saved path="saved"/>
            {/*<Results path="results" articles={Main.state.results}/>*/}
        </Main>

    </BrowserRouter>

);
