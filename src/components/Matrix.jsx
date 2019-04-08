import React from "react";
import {array, bool} from "prop-types";
import "./Matrix.less";

function Matrix ({ matrix, indexes, disabled }) {
    const isMarkedCell = (rowCell, columnCell) => indexes.some((index) => rowCell === index.x && columnCell === index.y) ? " maxAdjacent" : "";

    return (
        <div className={`component-matrix${disabled ? " matrix-disabled" : ""}`}>
            {matrix.map((row, i) => 
                <div key={i} className="matrix-row">{row.map((cell, j) => 
                    <span key={i+''+j} className={`matrix-cell${isMarkedCell(i,j)}`}>{cell}</span>)}
                </div>
            )}
        </div>
    );
}

Matrix.propTypes = {
    matrix: array.isRequired,
    indexes: array.isRequired,
    disabled: bool
};

export default Matrix;