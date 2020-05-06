module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "@vue/prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-labels": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
