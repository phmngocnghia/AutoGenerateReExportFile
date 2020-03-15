var { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testPathIgnorePatterns: ['__test__.+/test.ts'],
  watchPathIgnorePatterns: [
    // index file. generated by codegen test file
    'index.ts',
    'index.js',
  ],
}
