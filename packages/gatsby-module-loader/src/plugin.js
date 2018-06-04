module.exports = () => {}
module.exports.prototype.apply = compiler => {
  compiler.plugin(`compilation`, compilation => {
    compilation.mainTemplate.plugin(`require-extensions`, function(
      source,
      chunk,
      hash
    ) {
      if (chunk.chunks.length > 0) {
        var buf = []

        buf.push(``)
        buf.push(``)
        buf.push(`// expose the chunks object`)
        buf.push(this.requireFn + `.s = installedChunks;`)

        return source + this.asString(buf)
      }

      return source
    })
  })
}
