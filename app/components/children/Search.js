let React = require('react');


export default class Search extends React.Component {
    render() {
        return (
            <div className="Search">
                <form>
                    <label>Search</label>
                    <input type="text"
                           placeholder="Search for an article"
                           name="searchTerm"/>
                    <label>Start Year</label>
                    <input type="text"
                           placeholder="YYYY"
                           name="beginDate"/>
                    <label>End Year</label>
                    <input type="text"
                           placeholder="YYYY"
                           name="endDate"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}