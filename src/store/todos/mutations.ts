import Filter from '@/types/Filter';
import State from '@/types/State';
import Todo from '@/types/Todo';

const mutations = {
  SET_TODOS(state: State, _todos: Todo[]) {
    state.todos = _todos;
    // assumtion that todos are ordered by id
    if (_todos.length) state.nextId = _todos[_todos.length - 1].id + 1;
  },
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
  SET_FILTER(state: State, filter: Filter) {
    state.filter = filter;
  },
};
export default mutations;
