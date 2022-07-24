/**
 * @param data - JSONObject containing the data to sort by key
 * @returns JSONObject containing the sorted data
 */

const sortByKey = (data) => {

    try {
        
        return Object.keys(data).sort().reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }

}

exports.sortByKey = sortByKey;