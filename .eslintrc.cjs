module.exports = {
  env: {
    browser: true,
    es2021: true,
  },      
  extends: [
    'airbnb', 
    'airbnb-typescript', 
    'airbnb/hooks', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:react/recommended',  
    'plugin:storybook/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'vite.config.ts'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-props-no-spreading': 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'import/extensions': ['error','never',{
      'ts': 'never',
      'tsx': 'never',
      'json': 'always',
      'svg': 'always',
      'png': 'always',
      'jpg':'always',
      'css': 'always'
    }]
  },
};
