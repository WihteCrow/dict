/**
 * Created by crow on 15/11/10.
 */



/**
 * 处理get请求url:将域名和参数处理
 * @param api
 * @param args
 * @returns {string}
 */
module.exports = function(api, args) {
    var key;
    var arr = [];
    if (!(args instanceof Object)) {
        args = {};
    }
    for (key in args) {
        if (args.hasOwnProperty(key)) {
            arr.push(key + '=' + args[key]);
        }
    }
    return api + '?' + arr.join('&');
};