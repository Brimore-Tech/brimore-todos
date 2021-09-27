<template>
  <div>
    <a-checkbox v-model:checked="completed"></a-checkbox>
    <span>{{ todo.title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Checkbox } from 'ant-design-vue';
import Todo from '@/types/Todo';

export default defineComponent({
  name: 'TodoListItem',
  components: {
    'a-checkbox': Checkbox,
  },
  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>,
    },
  },
  data() {
    return {
      completed: false,
    };
  },
});
</script>

<style scoped>
div {
  background: var(--white-transparent);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;
}

div span {
  margin-left: 20px;
  font-weight: 700;
  color: var(--dark);
}
</style>

<style>
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: var(--light2) !important;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: var(--light2) !important;
  border-color: var(--light2) !important;
}
</style>
