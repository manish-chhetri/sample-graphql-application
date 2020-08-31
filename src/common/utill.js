const fetch = require('node-fetch')

async function fetchURL(url, headers)
{
    let response = await fetch(url, { method: 'GET', headers: headers});
    let data = await response.json();
    return data;
}

exports.fetchURL = fetchURL;