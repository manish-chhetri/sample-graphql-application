const fetch = require('node-fetch')

async function fetchURL(url, headers)
{
    let response = await fetch(url, { method: 'GET', headers: headers});
    let data = await response.json();
    return data;
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
