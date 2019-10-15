import { GetterTree, Getter } from 'vuex';
import { CounterState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<CounterState, RootState> = {
  counter(state): number {
    return state.counter;
  }
}