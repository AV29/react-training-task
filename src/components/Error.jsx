import React from 'react';
import PropTypes from 'prop-types';
import './Error.less';

function Error (props) {
    const { text } = props;

    return (
        <div className="error">{text}</div>
    );
}

Error.propTypes = {
    text: PropTypes.string.isRequired
};

export default Error;
