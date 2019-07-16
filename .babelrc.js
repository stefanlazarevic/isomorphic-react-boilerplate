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
    ["babel-plugin-styled-components", {
      "displayName": process.env.NODE_ENV === 'development',
      "ssr": true,
    }],
    "react-hot-loader/babel",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-export-default-from",
    "@babel/plugin-proposal-export-default-from",
  ],
  "env": {
    "test": {
      "plugins": [
        "babel-plugin-dynamic-import-node"
      ]
    }
  }
}
