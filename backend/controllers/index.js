const apis = {
    jikan: './apiController',
    flv: './apiflvController'
}
module.exports = {
    userCtrl: require('./userController'),
    apiCtrl: require(apis.jikan)
}