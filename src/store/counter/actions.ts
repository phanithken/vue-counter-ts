import { ActionTree } from 'vuex'
import { CounterState } from './types'
import { RootState } from '../types'

export const actions: ActionTree<CounterState, RootState> = {
  increment({ commit }): any {
    commit('increment')
  },
  decrement({ commit }): any {
    commit('decrement')
  }
}