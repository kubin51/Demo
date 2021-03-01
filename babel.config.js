module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 配置ant-design-vue的按需加载，当style为true时表示加载less样式，相应的须开启vue.config.js中的javascripEnabled:true
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};
