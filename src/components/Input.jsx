import React from "react";
import {bool, func, number, string} from "prop-types";
import "./Input.less";

function Input({ forLabel, classLabel, textLabel, isInvalid, classError, textError, classInput, ...props }) {

    return (
        <div className="control-input">
            <label htmlFor={forLabel} className={`label${classLabel ? ` ${classLabel}` : ""}`}>{textLabel}</label>
            <input {...props} className={`input${classInput ? ` ${classInput}` : ""}`} id={forLabel} />
            {isInvalid ? <div className={`error${classError ? ` ${classError}` : ""}`}>{textError}</div> : <div/>}
        </div>
    );
}

Input.propTypes = {
    type: string.isRequired,
    disabled: bool.isRequired,
    onChange: func.isRequired,
    value: number.isRequired,
    classLabel: string,
    classInput: string,
    classError: string,
    forLabel: string,
    textLabel: string,
    min: number,
    isInvalid: bool,
    textError: string
};

export default Input;