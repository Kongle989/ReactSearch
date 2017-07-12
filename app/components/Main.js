let React = require('react');

export default class Main extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div className="Main">
                <h1>Let's search for an article!</h1>

                {this.props.children}

            </div>
        );
    }
}