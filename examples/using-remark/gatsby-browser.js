exports.onClientEntry = () => {
  require(`es6-object-assign`).polyfill()
}
