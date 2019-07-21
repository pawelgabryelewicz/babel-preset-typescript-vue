# babel-preset-typescript-vue

> TypeScript preset for Babel 7.x supporting Vue.js components written in TS. A drop-in replacement for [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html).

## Why?

This preset was created to support TypeScript transpilation using Babel (not Microsoft TypeScript), also for [TypeScript-based Vue.js Single File Components (SFC)](https://vuejs.org/v2/guide/typescript.html), without enforced TS-to-JS transpilation for all files (which can be achieved by adding `@babel/plugin-transform-typescript` to your Babel config).

Due to architectural limitations of `vue-loader` the original [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html) preset was always assuming that the `<script>` section of Vue SFC was written in JavaScript. This wasn't an issue when `webpack` was using different loaders for .js and .ts files. Since Babel unifies that, `vue-loader` is always passing this file to `babel-loader` with an original filename (and a `resourceQuery` which is not accessible from the transpiling preset). Since `preset-typescript` was transpiling files with .ts and .tsx extensions, not .vue, SFCs were ignored and reported errors during ES6 to ES5 transpilation.

Most likely in the future, this won't be no longer needed if `vue-loader` will consider also Babel transpilation. As for this is the only friendly way to resolve the issue.

## How?

This preset checks whether the .vue file (SFC) has a `lang="ts"` attribute set for the `<script>` tag. If so, [@babel/plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript) is applied explicitly to the SFC file.

## Options

All the options match the original [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html) preset options.

- `isTSX` (boolean, defaults to `false`

  Forcibly enables jsx parsing. Otherwise angle brackets will be treated as typescript's legacy type assertion `var foo = <string>bar;`. Also, `isTSX: true` requires `allExtensions: true`

- `jsxPragma` (string, defaults to `React`)
  
  Replace the function used when compiling JSX expressions.
  
  This is so that we know that the import is not a type import, and should not be removed
  
- `allExtensions` (boolean, defaults to `false`)
  
  Indicates that every file should be parsed as TS or TSX (depending on the isTSX option)
  
  > You can read more about configuring preset options [here](https://babeljs.io/docs/en/presets#preset-options)

## Original notes and issues

See [@babel/preset-typescript](https://babeljs.io/docs/en/next/babel-preset-typescript.html) for more information or the [issues](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22area%3A%20typescript%22+is%3Aopen) associated with the original preset package.

## Install

Using npm:

```sh
npm install --save-dev babel-preset-typescript-vue
```

or using yarn:

```sh
yarn add babel-preset-typescript-vue --dev
```

## License

[MIT](http://opensource.org/licenses/MIT)
