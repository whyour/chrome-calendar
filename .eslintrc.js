module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:vue/base", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-labels": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
