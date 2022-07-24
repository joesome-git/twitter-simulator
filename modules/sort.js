/**
 * @param data - JSONObject containing the data to sort by key
 * @returns JSONObject containing the sorted data
 */

const sortByKey = (data) => {

    try {
        // sort Object by keys
        return Object.keys(data).sort().reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    } catch (error) {
        console.error(error);
    }

    return data;
}

exports.sortByKey = sortByKey;