import React from 'react';
import {connect} from "react-redux";

const Page = () => {
    return (
        <React.Fragment>
            <p>show</p>
        </React.Fragment>
    )
}

export default connect((state) => {
    return {
        state
    }
})(Page)