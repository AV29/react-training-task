export function updateSize(size) {
    return {type: "UPDATE_SIZE", payload: size}
}

export function updateLimit(limit) {
    return {type: "UPDATE_LIMIT", payload: limit}
}

export function updateMatrix() {
    return {type: "UPDATE_MATRIX"}
}

export function recalculateResultAndIndexes() {
    return {type: "UPDATE_RESULT_INDEXES"}
}