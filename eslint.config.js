// eslint.config.js
// This file is the entry point for ESLint 9's flat config system.
// For this project, which exports shareable configs, it might remain simple,
// relying on the exported arrays from core.js, index.js, and react.js.
// However, ESLint needs *something* here to recognize the new system.

// We can add a basic config for the project itself, if needed.
import eslintJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslintJs.configs.recommended,
  // Add any specific configs for linting *this* project's files (e.g., the config files themselves)
  // ...
  eslintConfigPrettier, // Apply prettier last
];

// Note: The actual shareable configs will be defined in core.js, index.js, react.js
// and imported by consuming projects like: import edaCoreConfig from 'eslint-config-eda/core';
