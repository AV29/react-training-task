import React from 'react';
import {bool, func, string} from 'prop-types';
import './Button.less';

function Button ({ text, classButton, ...props }) {
    return (
        <button className={`button${classButton ? ` ${classButton}` : ''}`} {...props} >{text}</button>
    );
}

Button.propTypes = {
    disabled: bool.isRequired,
    onClick: func.isRequired,
    classButton: string
};

export default Button;