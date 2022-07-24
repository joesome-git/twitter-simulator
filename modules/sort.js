/**
 * @param data - JSON Object containing the data to sort by key
 * @returns sorted JSON Object
 */

const sortObjectByKey = (data) => {

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

/**
 * @param data - Array containing the data to sort by key
 * @returns sorted array
 */

const sortArrayByKey = (data) => {

    try {
        // sort array by keys
        return data.sort((a, b) => a.key < b.key ? -1 : 1);
    } catch (error) {
        console.error(error);
    }

    return data;
}

exports.sortArrayByKey = sortArrayByKey;
exports.sortObjectByKey = sortObjectByKey;