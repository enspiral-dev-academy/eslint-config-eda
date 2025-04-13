import eslintJs from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import pluginImport from "eslint-plugin-import";
import pluginNode from "eslint-plugin-n"; // Using eslint-plugin-n now
import pluginPromise from "eslint-plugin-promise";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

// Filter out problematic globals with whitespace
const filteredBrowserGlobals = Object.fromEntries(
  Object.entries(globals.browser).filter(([key]) => key.trim() === key)
);


export default [
  // Base recommended rules
  eslintJs.configs.recommended,

  // Plugin configurations (using new flat config structure)
  // Note: Specific plugin configs might need adjustment based on their flat config support
  {
    plugins: {
      import: pluginImport,
      n: pluginNode,
      promise: pluginPromise,
    },
  },

  // Language Options
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        sourceType: "module",
        requireConfigFile: false, // Specific to @babel/eslint-parser
        ecmaVersion: 2020, // Replaces env.es2020
      },
      globals: {
        ...filteredBrowserGlobals, // Use the filtered object
        ...globals.node, // Replaces env.node and env.browser
      },
    },
  },

  // Rules from extended configs (need manual translation or finding flat config equivalents)
  // 'plugin:import/errors' -> Manually add rules or find flat config object if available
  // 'plugin:import/warnings' -> Manually add rules or find flat config object if available
  // 'plugin:import/react' -> This belongs in react.js config
  // 'plugin:promise/recommended' -> pluginPromise.configs['recommended'] might work if exported
  {
    rules: {
      // Example: Manually adding some import rules (check plugin docs for full list)
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      // Example: Manually adding some promise rules (check plugin docs for full list)
      "promise/catch-or-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/no-native": "off",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/avoid-new": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "warn",
      "promise/valid-params": "warn",
      // Example: Manually adding some node rules (check plugin docs for full list)
      "n/handle-callback-err": ["error", "^(err|error)$"],
      "n/no-callback-literal": "error",
      "n/no-deprecated-api": "error",
      "n/no-exports-assign": "error",
      "n/no-new-require": "error",
      "n/no-path-concat": "error",
      "n/process-exit-as-throw": "error",

      // Original custom rule override
      "promise/always-return": "off", // Changed from 0 to "off"
    },
  },

  // Settings (need translation)
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js"], // Keep this specific to core
        },
      },
    },
  },

  // Apply Prettier last
  eslintConfigPrettier,
];
