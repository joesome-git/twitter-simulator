/**
 * @param data - JSONObject containing the data to sort by key
 * @returns JSONObject containing the sorted data
 */

const sortByKey = (data) => {
    return Object.keys(data).sort().reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});
}

exports.sortByKey = sortByKey;