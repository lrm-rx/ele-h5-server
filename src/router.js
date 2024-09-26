const test = require("./controller")

module.exports = (app) => {
  app.use('/api/test', test)
}