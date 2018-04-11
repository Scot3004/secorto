module.exports = {
  "transform": {
    ".(js|jsx)": "babel-jest"
  },
  "testRegex": "(\\.(test|spec))\\.(jsx|js)$",
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/.cache/"
  ],
  "setupFiles": [
    "./src/setupTests.js"
  ],
  "moduleFileExtensions": [
    "jsx",
    "js"
  ],
  "moduleNameMapper": {
    "\\.(scss|svg|png|jpg)$": "<rootDir>/src/styleMock.js"
  },
  "collectCoverage": true,
  "coverageReporters": [
    "lcov",
    "text",
    "html"
  ]
}
