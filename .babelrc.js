const NODE_TARGET = 9;

const presetEnv = {
  "targets": {
    "node": NODE_TARGET
  }
}

if (process.env.NODE_ENV !== 'test') {
  presetEnv.modules = false;
}


module.exports = {
  "presets": [
    ["@babel/preset-env", presetEnv],
    "@babel/preset-react"
  ],
  "plugins": [
    "babel-plugin-styled-components",
    "react-hot-loader/babel",
    "react-loadable/babel",
    "@babel/plugin-syntax-dynamic-import",
    "dynamic-import-node",
    "@babel/plugin-proposal-class-properties"
  ]
}
