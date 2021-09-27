<template>
  <div v-if="filteredTodos.length > 0">
    <todo-list-item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>
  <h1 v-else>No todos</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import TodoListItem from './TodoListItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    ...mapState('todos', ['todos', 'filter']),
    ...mapGetters('todos', ['completed', 'active']),
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.completed;
        case 'active':
          return this.active;
        default:
          return this.todos;
      }
    },
  },
  created() {
    this.getTodos();
  },
  methods: {
    ...mapActions('todos', ['getTodos']),
  },
});
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  padding: 50px;
  font-weight: 700;
  color: var(--light2);
}
</style>
