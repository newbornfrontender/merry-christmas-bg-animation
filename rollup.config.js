const files = ['animated-title'];

export default {
  input: files.map((file) => `components/${file}.js`),
  output: {
    format: 'esm',
    dir: 'public/components',
  },
  experimentalCodeSplitting: true,
};
