module.exports = (state = [], action) => {
  switch (action.type) {
    case `SET_SITE_PLUGINS`:
      return []
    default:
      return state
  }
}
