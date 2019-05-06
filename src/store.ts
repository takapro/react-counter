import { createStore, Reducer } from 'redux';

// types

interface Action {
  type: 'DECREMENT' | 'INCREMENT';
}

export interface State {
  count: number;
}

// initial state

const initialState = {
  count: 0
};

// action creators

export const decrementAction = (): Action => ({
  type: 'DECREMENT'
});

export const incrementAction = (): Action => ({
  type: 'INCREMENT'
});

// reducer

const reducer: Reducer<State, Action> = (state = initialState, action): State => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};

// store

export const store = createStore(reducer, initialState);
