module.exports = {
  presets: [
    '@babel/preset-env', // для современного JavaScript
    ['@babel/preset-react', { runtime: 'automatic' }], // для JSX
    '@babel/preset-typescript' // если используете TypeScript
  ],
};