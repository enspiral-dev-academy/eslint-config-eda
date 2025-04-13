import coreConfig from './core.js';
import pluginVitest from 'eslint-plugin-vitest';

// Get recommended config and globals from Vitest plugin
const vitestRecommendedConfig = pluginVitest.configs?.recommended || {};
const vitestGlobals = pluginVitest.environments?.env?.globals || {};

export default [
  // Spread the core configuration array
  ...coreConfig,

  // Add Vitest specific configuration object
  {
    // Apply Vitest config primarily to common test file patterns
    // Consuming projects might need to adjust or override this `files` pattern
    files: [
      '**/*.test.js',
      '**/*.spec.js',
      '**/*.test.jsx',
      '**/*.spec.jsx',
      '**/*.test.ts',
      '**/*.spec.ts',
      '**/*.test.tsx',
      '**/*.spec.tsx',
      '**/__tests__/**',
      '**/tests/**',
    ],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      // Spread rules from recommended config if available
      ...(vitestRecommendedConfig.rules || {}),
      // Add any specific Vitest rule overrides here if needed
    },
    languageOptions: {
      globals: {
        ...vitestGlobals, // Add Vitest globals
      },
    },
    // Merge settings if Vitest configs provide them (less common)
    settings: {
      ...(vitestRecommendedConfig.settings || {}),
    },
  },
];
