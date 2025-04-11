import coreConfig from './core.js';
import jestPlugin from 'eslint-plugin-jest';

// Attempt to get the recommended and style configs from the Jest plugin
// The exact structure might vary based on the plugin version
const jestRecommendedConfig = jestPlugin.configs?.recommended || {};
const jestStyleConfig = jestPlugin.configs?.style || {};

export default [
  // Spread the core configuration array
  ...coreConfig,

  // Add Jest specific configuration object
  {
    // Apply Jest config primarily to common test file patterns
    // Consuming projects might need to adjust or override this `files` pattern
    files: [
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.test.jsx',
        '**/*.spec.jsx',
        '**/__tests__/**',
        '**/tests/**',
    ],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // Spread rules from recommended config if available
      ...(jestRecommendedConfig.rules || {}),
      // Spread rules from style config if available
      ...(jestStyleConfig.rules || {}),
      // Add any specific Jest rule overrides here if needed in the future
    },
    // Merge languageOptions if Jest configs provide them (unlikely for Jest plugin)
    languageOptions: {
      ...(jestRecommendedConfig.languageOptions || {}),
      ...(jestStyleConfig.languageOptions || {}),
      // Jest globals are already included in core.js via globals.jest
    },
    // Merge settings if Jest configs provide them
    settings: {
      ...(jestRecommendedConfig.settings || {}),
      ...(jestStyleConfig.settings || {}),
    },
  },
];
