// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 禁止new
    'no-new': 0,
    // 注释语句需要空格
    'spaced-comment': 0,
    // 使用全等于 === 或 !==
    'eqeqeq': 0,
    // {} 不允许多余换行
    'padded-blocks': 0,
    // json 和 arr 最后一项不允许有 逗号
    'comma-dangle': 0,
    // 逗号后要有空格
    'comma-spacing': 0,
    // 未定义的变量禁止使用
    'no-undef': 0,

    'new-cap': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
    'key-spacing': 0,
    'space-before-blocks': 0,
    'semi': 0,
    'keyword-spacing': 0,
    'space-infix-ops': 0,
    'indent': 0,
    'no-useless-escape': 0,
    'no-multiple-empty-lines': 0,
    'camelcase': 0,
    'quotes': 0,
    'no-dupe-keys': 0,
    'arrow-spacing': 0,
    'no-irregular-whitespace': 0,
    'object-property-newline': 0,
    'space-in-parens': 0,
    'no-redeclare': 0,
    'standard%2Fobject-curly-even-spacing': 0,
    'no-duplicate-imports': 0,
    'no-tabs': 0,
    'brace-style': 0,
    'no-labels': 0,
  }
}
