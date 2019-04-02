import React from 'react';
import PropTypes from 'prop-types';
import './Label.less';

function Label (props) {
    const { forControl, text } = props;

    return (
        <label htmlFor={forControl} className="label">{text}</label>
    );
}

Label.propTypes = {
    for: PropTypes.string,
    text: PropTypes.string
};

export default Label;