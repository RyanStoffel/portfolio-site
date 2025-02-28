module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Disable unused vars warnings
    "@typescript-eslint/no-unused-vars": "off",
    // Allow unescaped apostrophes
    "react/no-unescaped-entities": "off",
    // Disable specific rules if needed
    "@next/next/no-img-element": "off",
  },
};
