import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Input.less';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(Number(e.target.value));
    }
    
    render() {
        const { type, value, id, min, disabled } = this.props;

        return (
            <input
                className="input"
                type={type}
                value={value}
                id={id}
                min={min}
                disabled={disabled}
                onChange={this.handleChange}
            />
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default Input;