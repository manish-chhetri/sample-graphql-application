const request = require('request-promise');

async function fetchURL(url, method, headers)
{
    const options = {
        url: url,
        method: method,
        headers: headers,
        json: true
    };
    try {
        let response = await request(options);
        return await response;
    } catch (err) {
        console.error(err);
        let newErrObj = new Error(err.message)
        newErrObj.statusCode = err.statusCode
        return newErrObj;
    }
}
exports.fetchURL = fetchURL;

function getResolvedData (res) {
    if (typeof res.error === 'undefined') {
        return res.data
    } else {
        let err = new Error(res.statusText)
        err.response = res
        return err
    }
}
exports.getResolvedData = getResolvedData;
