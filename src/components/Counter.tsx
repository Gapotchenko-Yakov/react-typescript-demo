import { useReducer } from "react";

type CounterState = {
  count: number;
};

const initialState = {
  count: 0,
};

type ResetAction = {
  type: "RESET";
};

type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: CounterState["count"];
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {state?.count}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 12 })}>
        Decrement 12
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 12 })}>
        Increment 12
      </button>
    </div>
  );
};

export default Counter;
