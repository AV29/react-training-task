import React from 'react';
import PropTypes from 'prop-types';
import './Matrix.less';

function Matrix (props) {
    const { matrix, indexes, disabled } = props;

    return (
        <div className="component-matrix" style={disabled ? {opacity: 0.5} : null}>
            {matrix.map((row, i) => <div key={i} className="matrix-row">{row.map((cell, j) => <span key={i+''+j} className={indexes.some((index) => i === index.x && j === index.y) ? "matrix-cell maxAdjacent" : 'matrix-cell'}>{cell}</span>)}</div>)}
        </div>
    );
}

Matrix.propTypes = {
    matrix: PropTypes.array.isRequired,
    indexes: PropTypes.array.isRequired,
    disabled: PropTypes.bool
};

export default Matrix;