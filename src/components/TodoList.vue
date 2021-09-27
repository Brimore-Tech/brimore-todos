<template>
  <todo-list-item v-for="todo in filterTodos" :key="todo.id" :todo="todo" />
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
    filterTodos() {
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

<style scoped lang="scss"></style>
