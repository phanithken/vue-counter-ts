import { MutationTree } from 'vuex';
import { CounterState } from './types';

export const mutations: MutationTree<CounterState> = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  }
}