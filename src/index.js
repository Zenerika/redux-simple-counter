const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "MATH", value: 1 }));

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "MATH", value: -1 }));

const incrementButtonBy5 = document.getElementById('incrementBy5');
incrementButtonBy5.addEventListener('click', e => dispatch({ type: "MATH", value: 5 }));

const decrementButtonBy5 = document.getElementById('decrementBy5');
decrementButtonBy5.addEventListener('click', e => dispatch({ type: "MATH", value: -5 }));

const changeColor = document.getElementById('changecolor');
changeColor.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR" }));

const manualCounter = document.getElementById('manualcounter');
manualCounter.addEventListener('click', e => dispatch({ type: "MANUAL_COUNTER" }));

const addCounter = document.getElementById('addcounter');
addCounter.addEventListener('click', e => dispatch({ type: "ADD_COUNTER" }));
