/**
 * Created by crow on 15/11/10.
 */


var _ = require('underscore');

/**
 * 格式化字段
 * @param data
 * @returns {*}
 */
module.exports = function(data) {
    var result, _symbol;

    // 状态为0,查询失败
    if (data.errno !== 0) {
        return '查询失败';
    }
    data = data.data;
    _symbol = data.symbols[0];

    // name
    result = data.word_name + '\n\n';

    // 发音
    result += '美 [' + _symbol.ph_am + ']';
    result += '英 [' + _symbol.ph_en + ']\n';

    // 词语
    if (!_.isArray(_symbol.parts)) {
        _symbol.parts = [_symbol.parts];
    }
    _symbol.parts.forEach(function (elem) {
        result += elem.part + '  ' + elem.means.join(',') + '\n';
    });

    return result;
}