module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        // "eslint:recommended",
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/prop-types': "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", {"ignoreTypeReferences": true}]
    },
}
