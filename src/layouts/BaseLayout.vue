<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="themeLocal === 'left'"
        :theme="themeColor"
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo">Ant Design Pro</div>
        <SiderMenu :theme="themeColor" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header style="float:right" />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '90%' }"
          >
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <ThemeSetting />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./menu/SiderMenu";
import ThemeSetting from "../views/ThemeSetting";

export default {
  name: "BaseLayout",
  data() {
    return {
      collapsed: false,
      visible: false
    };
  },
  computed: {
    themeColor() {
      return this.$route.query.themeColor || "dark";
    },
    themeLocal() {
      return this.$route.query.themeLocal || "left";
    }
  },
  components: { Header, Footer, SiderMenu, ThemeSetting }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.trigger {
  padding: 0 20px;
  height: 64px;
  line-height: 64px;
  font-size: 20px;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  color: white;
  line-height: 32px;
  font-size: 16px;
}
</style>
