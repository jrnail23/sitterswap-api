module.exports = {
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
  verbose: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "text-summary", "lcovonly"],
  preset: "ts-jest",
  moduleNameMapper: {
    "^@App/(.*)$": "<rootDir>/src/$1",
  },
};
