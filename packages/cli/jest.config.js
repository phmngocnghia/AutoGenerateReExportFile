module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '__test__.+/test.ts',
    '__test__.+/a.ts',
    '__test__.+/index.ts',
    '__test__.+/index2.ts',
    'lib.+',
  ],
  watchPathIgnorePatterns: [
    // index file. generated by codegen test file
    'index.ts',
    'index.js',
    'chokidarTestDirectory',
  ],
}
