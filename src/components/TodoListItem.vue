<template>
  <div>{{ todo.title }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Todo from '@/types/Todo';

export default defineComponent({
  name: 'TodoListItem',
  props: {
    todo: Object as PropType<Todo>,
  },
});
</script>

<style scoped lang="scss"></style>
