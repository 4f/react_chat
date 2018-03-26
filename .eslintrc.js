module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true
    },
    "rules": {
      // "import/no-unresolved)": [ 2, { caseSensitive: false } ],
      "no-underscore-dangle":  0,
      "import/extensions":     0,
      "react/prop-types":      0,
      "import/no-extraneous-dependencies":  0,
      "react/jsx-filename-extension":       0,
    },
    "settings": {
  "import/resolver": "webpack"
}
};
