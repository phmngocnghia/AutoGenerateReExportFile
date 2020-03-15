require('dts-generator').default({
  name: 'package-name',
  project: '/path/to/package-directory',
  out: 'package-name.d.ts',
  removeSource: true,
})
