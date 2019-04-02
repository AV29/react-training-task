import React from 'react';
import PropTypes from 'prop-types';
import './Button.less';

function Button (props) {
    const { disabled, onClick } = props;

    return (
        <button className="button" disabled={disabled} onClick={onClick} />
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;