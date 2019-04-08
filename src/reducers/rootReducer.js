import { findMaxAdjacent, getMatrix } from "../components/utilities";

const matrix = getMatrix(5);
const resultAndIndexes = findMaxAdjacent(matrix, 5);

const initialState = {
    size: 5,
    maxSize: 20,
    matrix: matrix,
    limit: 5,
    resultAndIndexes: resultAndIndexes
}

export default function rootReducer(state=initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_SIZE":
            return {
                ...state,
                size: payload
            }
        case "UPDATE_MATRIX":
            return {
                ...state,
                matrix: getMatrix(state.size)
            }
        case "UPDATE_LIMIT":
            return {
                ...state,
                limit: payload
            }
        case "UPDATE_RESULT_INDEXES":
            return {
                ...state,
                resultAndIndexes: findMaxAdjacent(state.matrix, state.limit)
            }
        default: {
            return state;
        }
    }
}