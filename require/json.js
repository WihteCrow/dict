/**
 * Created by crow on 15/11/10.
 */


/**
 * 转为JSON数据
 * @param data
 * @returns {*}
 */
module.exports = function(data) {
    try {
        data = JSON.parse(data);
    } catch (e) {
        console.log('数据格式不正确');
    }
    return data;
}