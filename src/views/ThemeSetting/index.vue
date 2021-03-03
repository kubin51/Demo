<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <a-icon
          class="settingIcon"
          :type="visible ? 'close' : 'setting'"
          @click="visible = !visible"
        />
      </template>
      <div>
        <h2>页面整体色彩搭配</h2>
        <a-radio-group
          :value="$route.query.themeColor || 'dark'"
          @change="e => handSettingChange('themeColor', e.target.value)"
        >
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
      </div>
      <div>
        <h2>页面导航栏位置</h2>
        <a-radio-group
          :value="$route.query.themeLocal || 'left'"
          @change="e => handSettingChange('themeLocal', e.target.value)"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>

<style scoped>
.settingIcon {
  position: absolute;
  top: 240px;
  right: 300px;
  background-color: #189ffe;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 3px 0 0 3px;
}
</style>
