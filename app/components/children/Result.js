import React from "react";

class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                    <h3>Results</h3>
                    <p>{this.props.address}</p>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Results;
