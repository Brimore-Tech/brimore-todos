import { createStore } from 'vuex';
import todos from './todos';

export default createStore({
  modules: {
    todos,
  },
});
