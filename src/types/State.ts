import Filter from './Filter';
import Todo from './Todo';

type State = {
  todos: Todo[];
  nextId: number;
  filter: Filter;
};

export default State;
