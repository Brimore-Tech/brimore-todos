<template>
  <todo-list-item v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import TodoListItem from './TodoListItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    ...mapState('todos', ['todos']),
  },
});
</script>

<style scoped lang="scss"></style>
