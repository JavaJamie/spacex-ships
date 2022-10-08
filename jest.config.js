module.exports = {
  displayName: "spacex-ships",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "./coverage",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  transform: {
    "^.+\\.[t]sx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
  },
};
