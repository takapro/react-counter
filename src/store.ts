import { createStoreon, StoreonStore } from 'storeon';

export interface State {
  count: number;
}

const counter = (store: StoreonStore<State>): void => {
  store.on('@init', () => ({ count: 0 }));
  store.on('decrement', (state: State) => ({ count: state.count - 1 }));
  store.on('increment', (state: State) => ({ count: state.count + 1 }));
};

export const store = createStoreon([counter]);
