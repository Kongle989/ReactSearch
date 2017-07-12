let React = require('react');
import helpers from '../utils/helpers';
import Form from 'grandchildren/Form';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            startDate: "",
            endDate: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTerm = this.setTerm.bind(this);

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
            term: term,
            startDate: start,
            endDate: end
        })
    }

    render() {
        return (
            <div className="Search">

                <Form setTerm={this.setTerm}/>

            </div>
        );
    }
}