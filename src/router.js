const home_search = require("./controller/home_search")
const shop_list = require('./controller/shop_list')

module.exports = (app) => {
    app.use('/api/home_search', home_search)
    app.use('/api/shop_list', shop_list)
    app.use('/api/shop_list', shop_list)
    app.use('/api/auth', auth)
}