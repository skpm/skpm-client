const request = require('./utils')

const REGISTRY_URL = 'https://mahcfk07h5.execute-api.eu-west-1.amazonaws.com/prod/registry/'

module.exports = function(name, options) {
  options = options || {}
  if (!name) {
    return Promise.reject(new Error('Missing plugin name'))
  }
  return request({
    method: 'GET',
    url: (options.registryURL || REGISTRY_URL) + encodeURIComponent(name)
  }).then(function (body) {
    return body.item
  })
}
