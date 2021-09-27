<template>
  <todo-list-item v-for="n in 20" :key="n" :todo="{ title: 'hello world' }" />
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
