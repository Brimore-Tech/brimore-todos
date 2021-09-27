import Todo from '@/types/Todo';

type State = {
  todos: Todo[];
  nextId: number;
};

const todos = {
  namespaced: true,
  state: {
    todos: [
      {
        id: 0,
        title: 'my first todo',
        completed: false,
      },
      {
        id: 1,
        title: 'my second todo',
        completed: false,
      },
    ],
    nextId: 2,
  } as State,
  mutations: {
    INC_ID(state: State) {
      state.nextId += 1;
    },
    ADD_TODO(state: State, todo: Todo) {
      state.todos.push(todo);
    },
    EDIT_TODO(state: State, todo: Todo) {
      const index = state.todos.findIndex((_todo) => todo.id === _todo.id);
      state.todos[index] = todo;
    },
    DELTETE_TODO(state: State, todo: Todo) {
      const index = state.todos.findIndex((_todo) => todo.id === _todo.id);
      state.todos.splice(index, 1);
    },
  },
  actions: {
    incId({ commit }: any) {
      commit('INC_ID');
    },
    addTodo({ commit, dispatch, state }: any, title: string) {
      if (title === '') return;
      const todo: Todo = {
        id: state.nextId,
        title,
        completed: false,
      };
      dispatch('incId');
      commit('ADD_TODO', todo);
    },
    editTodo({ commit }: any, todo: Todo) {
      if (todo.title === '') return;
      commit('EDIT_TODO', todo);
    },
    deleteTodo({ commit }: any, todo: Todo) {
      commit('DELTETE_TODO', todo);
    },
  },
};

export default todos;
