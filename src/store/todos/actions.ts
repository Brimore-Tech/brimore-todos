import Api from '@/core/todos';
import Todo from '@/types/Todo';

const actions = {
  getTodos({ commit }: any) {
    Api.all().then((response) => {
      commit('SET_TODOS', response.data);
    });
  },
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
    Api.store(todo);
  },
  editTodo({ commit }: any, todo: Todo) {
    if (todo.title === '') return;
    commit('EDIT_TODO', todo);
    Api.edit(todo.id, todo);
  },
  deleteTodo({ commit }: any, todo: Todo) {
    commit('DELTETE_TODO', todo);
    Api.delete(todo.id);
  },
};

export default actions;
