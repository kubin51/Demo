<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon :type="menuInfo.meta" /><span>{{ menuInfo.name }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <template v-if="item.name">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="handleTitleClick(item.path)"
        >
          <span>{{ item.name }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from "ant-design-vue";
export default {
  name: "SubMenu",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleTitleClick(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped></style>
