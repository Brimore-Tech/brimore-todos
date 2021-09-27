<template>
  <div class="space-align-block">
    <h1>Agenda</h1>
    <a-radio-group
      v-model:value="filter"
      button-style="solid"
      @change="setFilter"
    >
      <a-radio-button value="all">all ({{ count }})</a-radio-button>
      <a-radio-button value="completed"
        >completed ({{ completedCount }})</a-radio-button
      >
      <a-radio-button value="active">active ({{ activeCount }})</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { RadioGroup, RadioButton } from 'ant-design-vue';
import Filter from '@/types/Filter';

export default defineComponent({
  components: {
    'a-radio-group': RadioGroup,
    'a-radio-button': RadioButton,
  },
  data() {
    return {
      filter: 'all' as Filter,
    };
  },
  methods: {
    ...mapMutations('todos', ['SET_FILTER']),
    setFilter() {
      this.SET_FILTER(this.filter);
    },
  },
  computed: {
    ...mapGetters('todos', ['count', 'completedCount', 'activeCount']),
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: var(--dark) !important;
  font-size: 32px;
  vertical-align: middle;
  margin: 0px;
  line-height: initial;
  font-weight: 700;
  float: left;
}

.space-align-block {
  margin: 8px 0px;
  padding-top: 20px;
}

.ant-radio-group {
  float: right;
}

.ant-radio-button-wrapper,
.ant-radio-button-wrapper:last-child,
.ant-radio-button-wrapper:first-child {
  margin-left: 5px;
  background-color: transparent;
  border: 1px solid var(--light2);
  border-radius: 5px;
  font-weight: 700;
  color: var(--dark);
}

.ant-radio-button-wrapper:not(:first-child)::before {
  content: none;
}

.ant-radio-group-solid
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
.ant-radio-group-solid
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: var(--light);
  background: var(--light2);
  border-color: var(--light2);
}

.ant-radio-button-wrapper:hover {
  color: inherit;
}
</style>
