let push = require("web-push")


// let keys = push.generateVAPIDKeys()



let vapidKeys = {
    publicKey: 'BPWSO8DLJf6XD6dNChPBlVa5eRA5erNdaNq1W9fMN0CbtspOwl0OAHydmBddQdHqt2AEPbKcP-gDtMhbbIoEOrY',
    privateKey: '0ZMkt6Lm9XfSRsDbNWexAK_CoBu--AKleu2pG1fwZ-A'
}


push.setVapidDetails("mailto:arvind@kraftshala.com", vapidKeys.publicKey, vapidKeys.privateKey)


// let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/esR93_NZ08c:APA91bEeahyftq7cLSP3cyL8azCoOzMwsJnhtgr7BX6p6KngL-HkJR1xDjEsua9PJWsmuvCKPS7WxeM8jsnE7tgXisY7SBbfjBQ00Fo2jvzi1r2_YmEG0hCa3Wtcy35cUPy_ktQcDsMs", "expirationTime": null, "keys": { "p256dh": "BL71G27DFPbcOdhB1R2LM4GanZIbdMPL-x7Hs073D2WdnXocOyGFgM8utjzsAr0Dc9jUZfk106AJQKAQFpIpPzM", "auth": "hUfkq34ZJKZ7r4v9Qobueg" } }


// let sub = { "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhJ…pEOgOzM646LvROuaddZO37HeOKT4ScNGYvK1zaEDCdrGd_gWQja7KgUneYs8", "keys": { "auth": "pV0IKH_mOrOGBM2h8bs-ew", "p256dh": "BD3Vehjy7vTPK097X26wFRD3YSG247k94u8OMUvxLNXd311KT7L8Vj0HMvn9FEFVJdsXKeckNLanpygvOBpyLhQ" } }


// let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/cvJqtUQyxuI:APA91bFNw8b5J7JGirrPxwS_rKtqtsLbeAQ_AvHDjgzV3NDIkbngJ6sQmrp-OIEABE4LVKNRvsAYwhENUyTYFhTqmGjXD2p6SOZIFAYnJHqMKqzOjKKmHFtdpG4pDiiO6vjpLlral9Av", "expirationTime": null, "keys": { "p256dh": "BDFmSzlakH0AWdGdpw0AsltpJNURF7kSxv_PXncb4io3qZObpRXZagTk1BV1HjRYEoxSEDQ0lE3BVLhES_jYVg0", "auth": "U2X8gs8JRtx4buRHrj3aQg" } }

// let sub = { "endpoint": "https://wns2-sg2p.notify.windows.com/w/?token=BQYAAADeqvnD2d50qqMUJQ537NYP41JWSwAIPE%2f11RlJqcCW80ElH4UvRw%2bt6tmmFEOO4iZ1620hvEkj%2bwK0Dqdyh%2br8d2vMGT7wcA5pr2rhM8RiVgz0q0zl%2fXSEmhJnjuC0JnQ%2f%2bGOj%2f0rny1xeTpjGBf1oZdo%2btH2jTxDsOdTIoaRy5LE%2fYbhJi%2fFMOYoXcXrvWytntW0ifxmuSFD85leT4jjWTPQ4G%2bDKBDFsXNSbDQ5YSde2RLBodJbj5O%2bJYO%2f5OpJ7%2bcIXOc6w6MC2gW4lXmlugR77de5YX65uY8s4GFzi4mjRSZrXZL8pqMOXy%2bJ0n60JNqULIh5AVlbx2Tv0pi6VpVbBJt9V7SPqgmTWhQwQMAfKdNzqeD6a16zM21plvxs%3d", "expirationTime": null, "keys": { "p256dh": "BJTyzFc_KBJj1WXD6BHbSD6NEh1WE-gyqpVyzHvWtBKjcN2qe_pYT6kRQYCvHTHAz6U1E5VlOJq83G-44Za9BQE", "auth": "qmWgKzkuKE7icWE9R4uEhg" } }

let sub = { "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhJ0E4fOEKSFZUOOaPdpyv-c4aaOun_n45Pfe5yX_pRjBsiYKOZD0w-QKPa1pI4AeFPAR34df9x9pVTOxJBT-sIt5ExrQrFGh2PQOkC382DPtMb-txqY1pEOgOzM646LvROuaddZO37HeOKT4ScNGYvK1zaEDCdrGd_gWQja7KgUneYs8", "keys": { "auth": "pV0IKH_mOrOGBM2h8bs-ew", "p256dh": "BD3Vehjy7vTPK097X26wFRD3YSG247k94u8OMUvxLNXd311KT7L8Vj0HMvn9FEFVJdsXKeckNLanpygvOBpyLhQ" } }
push.sendNotification(sub, "new test message")