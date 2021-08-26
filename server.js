let push = require("web-push")


// push.generateVAPIDKeys() to generate new vapidKeys


let vapidKeys = {
    publicKey: 'BPWSO8DLJf6XD6dNChPBlVa5eRA5erNdaNq1W9fMN0CbtspOwl0OAHydmBddQdHqt2AEPbKcP-gDtMhbbIoEOrY',
    privateKey: '0ZMkt6Lm9XfSRsDbNWexAK_CoBu--AKleu2pG1fwZ-A'
}


push.setVapidDetails("mailto:arvind@kraftshala.com", vapidKeys.publicKey, vapidKeys.privateKey)


let sub = {}


push.sendNotification(sub, "new test message")