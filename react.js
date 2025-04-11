import indexConfig from './index.js'; // Import the base config array
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

// Attempt to get recommended configs from plugins
// Structure might vary; check plugin documentation for flat config exports
const reactRecommendedConfig = pluginReact.configs?.recommended || {};
const jsxA11yStrictConfig = pluginJsxA11y.configs?.strict || {}; // Use strict as per original extends

export default [
  // Spread the base configuration array from index.js
  ...indexConfig,

  // React specific configuration object
  {
    files: ['**/*.js', '**/*.jsx'], // Apply React rules to JS and JSX files
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
    },
    languageOptions: {
      ...reactRecommendedConfig.languageOptions, // Merge language options if provided
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    rules: {
      // Spread rules from React recommended config
      ...(reactRecommendedConfig.rules || {}),
      // Spread rules from JSX A11y strict config
      ...(jsxA11yStrictConfig.rules || {}),

      // Original custom rule override
      'react/prop-types': 'off', // Changed from 0 to "off"
    },
    settings: {
      // Spread settings from React recommended config
      ...(reactRecommendedConfig.settings || {}),
      // Spread settings from JSX A11y strict config
      ...(jsxA11yStrictConfig.settings || {}),

      // Original settings
      react: {
        version: 'detect', // Keep React version detection
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'], // Add .jsx for React projects
        },
      },
    },
  },
  // Note: 'prettier/react' is generally not needed with eslint-config-prettier v8+
  // eslint-config-prettier handles disabling conflicting rules automatically.
];
