module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx)",
    "../stories/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}