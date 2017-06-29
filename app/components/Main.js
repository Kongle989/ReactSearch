let React = require('react');

import helpers from './utils/helpers';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: "Dog",
            startYear: "",
            endYear: "",
            results: ""
        };

        this.setTerm = this.setTerm.bind(this);
        this.yell = this.yell.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('it did update');
        if (prevState.searchTerm !== this.state.searchTerm ||
            prevState.startYear !== this.state.startYear ||
            prevState.endYear !== this.state.endYear) {
            console.log("UPDATED");

            helpers.runQuery(
                this.state.searchTerm,
                this.state.startYear,
                this.state.endYear)
                .then((data) => {
                    if (data !== this.state.results) {
                        console.log(data);

                        this.setState({results: data});
                    }
                });
        }
    }

    setTerm(term, start, end) {
        this.setState({
            searchTerm: term,
            startYear: start,
            endYear: end
        });
        console.log('parent setterm');
    }

    yell() {
        console.log('AHHASHDAHSDN');
    }

    render() {
        return (
            <div className="Main">
                <h1>{this.state.searchTerm}</h1>
                {this.props.children}

            </div>
        );
    }
}