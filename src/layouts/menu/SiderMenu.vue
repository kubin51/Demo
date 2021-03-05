<template>
  <div style="width: 200px">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in $router.options.routes">
        <template v-if="item.name">
          <a-menu-item v-if="!item.children" :key="item.path">
            <span>{{ item.name }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";

export default {
  components: {
    "sub-menu": SubMenu
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    handleClick() {
      console.log(222, this.$router.options.routes);
    }
  }
};
</script>
