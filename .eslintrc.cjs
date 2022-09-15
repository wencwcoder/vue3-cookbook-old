require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  // 根目录
  root: true,
  // 环境
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  // 定义全局变量: readonly | writable
  // globals: {
  //   Promise: "readonly",
  // },
  // 扩展配置
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  // 解析器
  // parser: "esprima",
  // 解析器选项
  parserOptions: {
    ecmaVersion: "latest",
    // ecmaVersion: 12, // 2021
    // sourceType: "module",
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  // 插件
  // plugins: [],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
  },
};
