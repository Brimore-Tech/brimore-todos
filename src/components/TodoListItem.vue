<template>
  <div>
    <a-checkbox v-model:checked="completed"></a-checkbox>
    <span
      class="title"
      v-bind:class="{ completed }"
      @dblclick="enterEditingMode"
      v-if="!editingMode"
      >{{ todo.title }}</span
    >
    <a-input
      type="text"
      @blur="closeEditingMode"
      @keydown.enter="closeEditingMode"
      @keydown.esc.stop="closeEditingMode(false)"
      v-model:value="title"
      v-focus
      v-else
    ></a-input>
    <span class="icon-button" @click="enterEditingMode" v-if="!editingMode"
      ><edit-outlined
    /></span>
    <span class="icon-button" @click="closeEditingMode" v-else
      ><check-outlined
    /></span>
    <span class="icon-button" @click="removeTodo"><delete-outlined /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapActions } from 'vuex';
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
} from '@ant-design/icons-vue';
import { Checkbox, Input } from 'ant-design-vue';
import Todo from '@/types/Todo';

export default defineComponent({
  name: 'TodoListItem',
  components: {
    'a-checkbox': Checkbox,
    'a-input': Input,
    DeleteOutlined,
    EditOutlined,
    CheckOutlined,
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
      editingMode: false,
      title: this.todo.title as string,
    };
  },
  methods: {
    ...mapActions('todos', ['editTodo', 'deleteTodo']),
    enterEditingMode() {
      this.editingMode = true;
    },
    closeEditingMode(save = true) {
      if (!this.editingMode) return;
      this.editingMode = false;
      if (save && this.todo.title !== this.title) {
        this.editTodo({ ...this.todo, title: this.title }).finally(() => {
          this.title = this.todo.title;
        });
      } else {
        this.title = this.todo.title;
      }
    },
    toggleComplete() {
      this.editTodo({ ...this.todo, completed: this.completed });
    },

    removeTodo() {
      this.deleteTodo(this.todo);
    },
  },
});
</script>

<style scoped>
div {
  background: var(--white-transparent);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;
  justify-content: space-between;
  display: flex;
  text-align: left;
}

div:hover,
div:focus-within {
  background: var(--light3);
}

div span.title,
input {
  font-size: 14px;
  margin: 0 20px;
  font-weight: 700;
  color: var(--dark);
  width: 100%;
  cursor: text;
  padding-top: 3px;
  overflow: hidden;
}

.completed {
  text-decoration: line-through;
  color: var(--light2) !important;
}

input:focus {
  background: var(--white-transparent);
}

input {
  border: 0 !important;
  background: transparent;
  margin-left: 20px;
  padding: 0;
  box-shadow: none !important;
}

.icon-button {
  float: right;
  color: var(--dark);
  text-align: center;
  cursor: pointer;
  padding: 3px 7px;
  border-radius: 100%;
  margin-left: 5px;
}

.icon-button:hover {
  background: var(--light2);
}

.ant-checkbox-wrapper {
  padding-top: 3px;
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
