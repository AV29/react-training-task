import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import Matrix from "./Matrix";
import {connect} from "react-redux";
import "./YourComponent.less";
import * as ActionCreators from "../actions/actions";

class YourComponent extends Component {
    handleChangeSize = (e) => {
        const size = Number(e.target.value);
        this.props.updateSize(size);
        this.props.updateMatrix();
        this.props.recalculateResultAndIndexes();
    }

    handleChangeLimit = (e) => {
        const limit = Number(e.target.value);
        this.props.updateLimit(limit);
        this.props.recalculateResultAndIndexes();
    }

    handleRefreshMatrix = () => {
        this.props.updateMatrix();
        this.props.recalculateResultAndIndexes();
    }

    render() {
        const { size, limit, maxSize, matrix, resultAndIndexes: {res, indexes} } = this.props;
        const isInvalidSettings = size > maxSize || limit > size;

        return (
            <div className="component-wrapper">
                <div className="component-controls">
                    <Input
                        classLabel="classLabel"
                        classInput="classInput"
                        classError="classError"
                        type="number"
                        forLabel="size"
                        textLabel="Size"
                        min={1}
                        value={size}
                        disabled={limit > size}
                        onChange={this.handleChangeSize}
                        isInvalid={isInvalidSettings}
                        textError={`should be in range of ${limit > maxSize ? "1" : limit} - ${maxSize}`}/>
                    <Input
                        classLabel="classLabel"
                        classInput="classInput"
                        classError="classError"
                        type="number"
                        forLabel="limit"
                        textLabel="Limit"
                        min={1}
                        value={limit}
                        disabled={size > maxSize}
                        onChange={this.handleChangeLimit}
                        isInvalid={limit > size}
                        textError={`can't be more than ${size}`}/>

                    <div className="block-result">Result: {res}</div>
                    <div className="control-button">
                        <Button
                            disabled={isInvalidSettings}
                            onClick={this.handleRefreshMatrix}
                            classButton="classButton"/>
                    </div>
                </div>
                <Matrix
                    matrix={matrix}
                    indexes={indexes}
                    disabled={isInvalidSettings}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        size: state.size,
        maxSize: state.maxSize,
        matrix: state.matrix,
        limit: state.limit,
        resultAndIndexes: state.resultAndIndexes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSize: (size) => dispatch(ActionCreators.updateSize(size)),
        updateLimit: (limit) => dispatch(ActionCreators.updateLimit(limit)),
        updateMatrix: () => dispatch(ActionCreators.updateMatrix()),
        recalculateResultAndIndexes: () => dispatch(ActionCreators.recalculateResultAndIndexes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);