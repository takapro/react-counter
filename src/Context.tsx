import React, { createContext, useContext, useReducer } from 'react';

// action

export const DECREMENT: 'DECREMENT' = 'DECREMENT';
export const INCREMENT: 'INCREMENT' = 'INCREMENT';

type Action =
  { type: typeof DECREMENT, decr: number } |
  { type: typeof INCREMENT, incr: number };

// state

interface State {
  count: number;
}

const initialState = {
  count: 0
};

// reducer

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, count: state.count - action.decr };

    case INCREMENT:
      return { ...state, count: state.count + action.incr };

    default:
      return state;
  }
};

// context

const StateContext = createContext(initialState);
const DispatchContext = createContext((action: Action) => {});

export const CounterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCounterState = () => {
  return useContext(StateContext);
};

export const useCounterDispatch = () => {
  return useContext(DispatchContext);
};
