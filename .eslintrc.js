module.exports = {
  "extends": [
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["prettier", "react", "@typescript-eslint"],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
  "prefer-const": [true, {"destructuring": "all"}],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
    "useJSXTextNode": true
  },
  "root": true,
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
