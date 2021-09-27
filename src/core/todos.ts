import Todo from '@/types/Todo';
import Api from './index';

export default {
  all() {
    return Api.get('todos?_start=0&_limit=20');
  },
  store(data: Todo) {
    return Api.post('todos', data);
  },
  delete(id: number) {
    return Api.delete(`todos/${id}`);
  },
  edit(id: number, data: Todo) {
    return Api.put(`todos/${id}`, data);
  },
};
