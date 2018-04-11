module.exports = {
  "transform": {
    ".(js|jsx)": "babel-jest"
  },
  "testRegex": "(\\.(test|spec))\\.(jsx|js)$",
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/.cache/"
  ],
  "moduleFileExtensions": [
    "jsx",
    "js"
  ],
  "moduleNameMapper": {
    "\\.(scss|svg|png|jpg)$": "<rootDir>/src/styleMock.js"
  },
  "collectCoverage": process.env.CI === "true",
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/public/**"
  ],
  "coverageReporters": process.env.CI === "true" ?  ['lcov'] : ['text', 'html'],
  "setupTestFrameworkScriptFile": "./src/setupTests.js"
}
