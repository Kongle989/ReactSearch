import {Link} from 'react-router-dom';
let React = require('react');

export default class Main extends React.Component {
    render(){
        return (
<div className="Main">

        hey
    <Link to="/search"><button>Search</button></Link>
    <Link to="/saved"><button>Saved</button></Link>

    {this.props.children}
</div>
        );
    }
}