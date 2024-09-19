import globals from "globals";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  ...pluginVue.configs["flat/essential"],
];

module.exports = {
  env: {
    node: true,
    commmonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
};