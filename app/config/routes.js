import { Router, Route, hashHistory } from 'react-router';

// Include the React library
let React = require("react"),

// Reference the high-level components
    Main = require("../components/Main"),
    Search = require("../components/Search"),
    Saved = require("../components/Saved");

// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

            {/* If user selects Search or Saved show the appropriate component */}
            <Route path="search" component={Search}/>
            <Route path="saved" component={Saved}/>

        </Route>
    </Router>

);
