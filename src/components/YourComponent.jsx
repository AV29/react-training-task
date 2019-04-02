import React, {Component} from 'react';
import Label from './Label';
import Input from './Input';
import Error from './Error';
import Button from './Button';
import Matrix from './Matrix';
import { findMaxAdjacent, getMatrix } from './utilities';
import './YourComponent.less';

class YourComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 5,
            limit: 5,
            matrix: getMatrix(5),
            maxSize: 20
        }
    }

    handleChangeSize = (size) => {
        this.setState({
            size: size,
            matrix: getMatrix(size)
        });
    }

    handleChangeLimit = (limit) => {
        this.setState({
            limit: limit
        });
    }

    handleRefreshMatrix = () => {
        this.setState({
            matrix: getMatrix(this.state.size)
        });
    }

    render() {
        const { size, limit, maxSize, matrix } = this.state;
        const resAndIndexes = findMaxAdjacent(matrix, limit);
        const { res, indexes } = resAndIndexes;

        return (
            <div className="yourComponent-wrapper">
                <div className="yourComponent-controls">
                    <div className="control-input">
                        <Label forControl="size" text="Size" />
                        <Input
                            type="number"
                            id="size"
                            min={1}
                            disabled={limit > size}
                            onChange={this.handleChangeSize}
                            value={size} />
                        {size > maxSize || limit > size ? <Error text={"should be in range of " + limit + " - " + maxSize}/> : <div/>}
                    </div>

                    <div className="control-input">
                        <Label forControl="limit" text="Limit" />
                        <Input
                            type="number"
                            id="limit"
                            min={1}
                            disabled={size > maxSize}
                            onChange={this.handleChangeLimit}
                            value={limit} />
                        {limit > size ? <Error text={"can't be more than " + size}/> : <div/>}
                    </div>
                    <div className="block-result">Result: {res}</div>
                    <div className="control-button">
                        <Button
                            disabled={ size > maxSize || limit > size }
                            onClick={this.handleRefreshMatrix} />
                    </div>
                </div>
                <Matrix
                    matrix={matrix}
                    indexes={indexes}
                    disabled={size > maxSize || limit > size}
                />
            </div>
        );
    }
}

export default YourComponent;