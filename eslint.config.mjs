import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },

  // Common JavaScript rules
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Frontend configuration
  {
    files: ["client/**/*.{js,jsx}"],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",
    },
  },

  // Backend configuration
  {
    files: ["server/**/*.js"],

    languageOptions: {
      globals: globals.node,
    },
  },
];
