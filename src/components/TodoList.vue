<template>
  <todo-list-item :todo="{ title: 'hello world' }" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoListItem from './TodoListItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoListItem,
  },
});
</script>

<style scoped lang="scss"></style>
