module.exports = {
  extends: "airbnb-typescript",
  parserOptions: {
    project: './tsconfig.json'
  },
  "overrides": [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "no-alert":  "off"
      }
    }
  ]
}
