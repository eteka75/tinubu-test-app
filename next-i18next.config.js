// next.config.js

const withNextIntl = require("next-intl/plugin")("./utils/i18n.ts");

module.exports = withNextIntl({
  reactStrictMode: true,
});
