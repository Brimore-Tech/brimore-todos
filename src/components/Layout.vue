<template>
  <a-layout>
    <a-layout-header>
      <a-row>
        <a-col :lg="{ span: 12, offset: 6 }" :span="24">
          <slot name="header"></slot>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :lg="{ span: 12, offset: 6 }" :span="24"><slot></slot></a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>
      <a-row>
        <a-col :lg="{ span: 12, offset: 6 }" :span="24"
          ><slot name="footer"></slot>
        </a-col>
      </a-row>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  Row,
  Col,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-layout': Layout,
    'a-layout-header': LayoutHeader,
    'a-layout-content': LayoutContent,
    'a-layout-footer': LayoutFooter,
  },
});
</script>

<style scoped>
.ant-layout-header {
  height: auto;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding-bottom: 29px;
}

.ant-layout-footer {
  background: transparent;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20;
}

.ant-layout-content {
  padding: 110px 50px 100px;
}

.ant-layout-footer,
.ant-layout-header,
.ant-layout-content,
.ant-layout {
  background-color: transparent;
}

.ant-layout-footer,
.ant-layout-header {
  padding: inherit 50px;
  background: var(--light) 78;
  backdrop-filter: blur(6px);
}
</style>
