const Filter = require('broccoli-filter')

function WorkerPlugin (inputNode, options = {}) {
  Filter.call(this, inputNode, {
    annotation: 'WorkerPlugin'
  })
  this.options = options
}

WorkerPlugin.prototype = Object.create(Filter.prototype)
WorkerPlugin.prototype.constructor = WorkerPlugin

WorkerPlugin.prototype.processString = function (content) {
  return content;
}

module.exports = {
  WorkerPlugin
}
