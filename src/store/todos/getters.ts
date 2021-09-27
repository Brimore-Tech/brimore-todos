import State from '@/types/State';

const getters = {
  completed: (state: State) => state.todos.filter((todo) => todo.completed),
  active: (state: State) => state.todos.filter((todo) => !todo.completed),
  count: (state: State) => state.todos.length,
  completedCount: (state: State) => {
    const todos = state.todos.filter((todo) => todo.completed);
    return todos.length;
  },
  activeCount: (state: State) => {
    const todos = state.todos.filter((todo) => !todo.completed);
    return todos.length;
  },
};

export default getters;
