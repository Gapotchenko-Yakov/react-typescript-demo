import { useReducer } from "react";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

type CounterAction = { type: string; payload: CounterState["count"] };

function reducer(state = initialState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
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
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 12 })}>
        Increment 12
      </button>
    </div>
  );
};

export default Counter;
