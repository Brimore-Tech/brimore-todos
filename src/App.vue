<template>
  <layout data-theme="blue">
    <template v-slot:header><filters-header /></template>
    <todo-list />
    <template v-slot:footer><input-footer /></template>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FiltersHeader from './components/FiltersHeader.vue';
import InputFooter from './components/InputFooter.vue';
import Layout from './components/Layout.vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoList,
    Layout,
    FiltersHeader,
    InputFooter,
  },
});
</script>

<style lang="scss">
:root {
  --white-transparent: #ffffff61;
  --light: #fffebe;
  --light2: #c3c37d;
  --light3: #e4e3a1;
  --dark: #484836;
}
.html[data-theme='blue'] {
  --white-transparent: #ffffff61;
  --light: #d7e9ff;
  --light2: #6186b5;
  --light3: #9fc5f5;
  --dark: #373648;
}
.ant-layout {
  height: 100vh;
  background-color: var(--light) !important;
  background-size: 100% 75px;
}
* {
  transition: 0.1s all ease 0s;
  -webkit-transition: 0.1s all ease 0s;
  -moz-transition: 0.1s all ease 0s;
  -ms-transition: 0.1s all ease 0s;
}
</style>
