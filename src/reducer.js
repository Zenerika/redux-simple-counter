const initialState = {
    value: 0,
    color: 'red'
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "MATH") {
        return {
            value: state.value + action.value,
            color: state.color
        }
    }
    else if (type === "CHANGE_COLOR") {
        return {
            value: state.value,
            color: state.color = changeColor.value
        }
    }
    else if (type === "MANUAL_COUNTER") {
        return {
            value: parseInt(manualcounter.value),
            color: state.color = changeColor.value
        }
    }
    else if (type === "ADD_COUNTER") {
        return {
            value: state.value,
            color: state.color
        }
    }
    return state
}