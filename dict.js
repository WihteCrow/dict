#!usr/bin/env node

/**
 * @type {string} API
 * @type {string} APIKEY
 */
const API = 'http://openapi.baidu.com/public/2.0/translate/dict/simple';
const API_KEY = 'rLRWIHHMB4Z5lc6GNxCyS9rs';
const LANGUAGE = {
    'zh': '中文',
    'en': '英文'
}

var request = require('request');
var getUrl = require('./require/url.js');
var format = require('./require/format.js');
var toJSON = require('./require/json.js');

var url, option;

/**
 * 请求返回数据处理
 * @param error
 * @param response
 * @param body
 * @private
 */
function _callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = format(toJSON(body));
        console.log(info);
    }
}

url = getUrl(API, {
    'q': 'love',
    'client_id': API_KEY,
    'from': 'en',
    'to': 'zh'
});
option = {
    url: url,
    headers: {
        'Content-encoding': 'gzip',
        'Content-type': 'application/json; charset=utf-8',
        'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36'
    }
}

request(option, _callback);
