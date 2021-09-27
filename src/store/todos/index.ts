import State from '@/types/State';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const todos = {
  namespaced: true,
  state: {
    todos: [],
    nextId: 0,
    filter: 'all',
  } as State,
  mutations,
  actions,
  getters,
};

export default todos;
