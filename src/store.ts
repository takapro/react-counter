import { createSlice, configureStore } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementAction: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementAction: (state) => ({
      ...state,
      count: state.count + 1,
    }),
  },
});

export const { decrementAction, incrementAction } = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer,
});
