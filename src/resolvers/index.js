const utill = require(__dirname + '/../common/utill.js')

const resolvers =  {
    Query: {
        getChatData: (parent, args) => {
            const { ad_id, peer_id, user_id } = args
            const headers = {
                "Authorization": "Basic bWFnbmV0bzpjR0Z1WVcxbGNtRXRZWEJwT21SbGRpMXdZWE56ZDI5eVpDMW1iM0l0WW1GemFXTXRZWFYwYUE="
            }
            /*const data = {
                "name": "Wade Wilson",
                "occupation": "Murderer",
                "age": "30 (forever)"
            }*/
            const domainUrl = `https://api.olx.in`;
            const adUrl = domainUrl + `/api/v2/items/${ad_id}`
            const adPhoneUrl = domainUrl + `/api/v2/items/${ad_id}/params?filter=price`
            const userUrl = domainUrl + `/api/v1/users/${user_id}`
            const peerUrl = domainUrl + `/api/v1/users/${peer_id}`
            let chatDataResponseObj = {};

            //Logged in user info
            chatDataResponseObj.user = utill.fetchURL(peerUrl, headers).then(res => {
                return res.data
            })

            //Ad info
            chatDataResponseObj.ad = utill.fetchURL(adUrl, headers).then(adRes => {
                if (user_id != adRes.data.user_id) {
                    chatDataResponseObj.user = utill.fetchURL(peerUrl, headers).then(peerRes => {
                        if (peerRes.data.is_phone_visible === false && adRes.data.has_phone_param === false) {
                            const adPhoneObj = utill.fetchURL(adPhoneUrl, headers).then(adPhoneRes => {
                                return adPhoneRes
                            })
                            adRes.data.phone = adPhoneObj.then(res => {
                                console.log(`------ ad Data ------`)
                                console.log(res)
                              return res.data.price
                            })
                        }
                        return peerRes.data
                    })
                }
                console.log(`------ ad Data ------`)
                console.log(adRes)
                return adRes.data
            })

            /*chatDataResponseObj.ad.price = adObj.data.price.then(res => {
                console.log(`------ ad Data New ------`)
                console.log(res)
                return res
            })*/

            return chatDataResponseObj;
        }
    }
};

module.exports = resolvers