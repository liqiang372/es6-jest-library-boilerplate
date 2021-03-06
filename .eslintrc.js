module.exports = {
  "rules": {
      "comma-dangle": "always",
      "no-const-assign": 2,
      "object-curly-spacing": [
          2,
          "always"
      ],
      "quotes": [
          2,
          "single"
      ],
      "spaced-comment": 2,
      "space-before-blocks": 2,
      "no-plusplus": 2,
      "strict": 0,
      "no-console": 0,
      "no-var": 2,
      "indent": [
          2,
          4
      ],
      "linebreak-style": [
          2,
          "unix"
      ],
      "semi": [
          2,
          "always"
      ]
  },
  "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jest": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
      "sourceType": "module",
      "allowImportExportEverywhere": false,
      "codeFrame": false
  },
  "plugins": [
      "react"
  ]
}