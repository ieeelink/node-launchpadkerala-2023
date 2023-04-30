const db = require('../database/connection');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const collections = require('../database/collections.json');

const contact = {
    message: (data) => {
        return new Promise(async (resolve, reject) => {
            delete data[''];
            data._id = new ObjectId();
            data.date = new Date();
            db.get()
                .collection(collections.MESSAGE)
                .insertOne(data)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
        })
    },
}

const candidate = {

    viewResult: (data) => {
        return new Promise(async (resolve, reject) => {

            // let data.lpk_id = data.data.lpk_id;
            if(data.lpk_id.startsWith(" ")){
                data.lpk_id = data.lpk_id.substring(1);
            }
            if(data.lpk_id.endsWith(" ")){
                data.lpk_id = data.lpk_id.substring(0, 8);
            }
            
            if (String(data.lpk_id.length) == 8 && data.lpk_id.includes("LPK1")) {
                db.get()
                    .collection(collections.CANDIDATES)
                    .findOne({
                        "id": data.lpk_id
                    })
                    .then((response) => {
                        // console.log(response)
                        if (response) {
                            if(data.email.startsWith(" ")){
                                data.email = data.email.substring(1);
                            }
                            if(data.email.endsWith(" ")){
                                data.email = data.email.substring(0, 8);
                            }
                            if(response.email == data.email) {
                                resolve(response)
                            }else if(response.other_email.original == data.email){
                                resolve(response)
                            }else if(response.other_email.corrected == data.email){
                                resolve(response)
                            }else if(response.other_email.hackerearth == data.email){
                                resolve(response)
                            }else{
                                reject("Please enter the correct email address.")
                            }
                        } else {
                            reject("We regret to inform you that we are unable to proceed with your application to the next round. We wish you all the best for your future endeavors.")
                    }
                    }).catch((error) => {
                        reject(error)
                    })
            } else {
                reject("Please enter a valid Launchpad Kerala ID.")
            }
        })
    },

    view: (data) => {
        return new Promise(async (resolve, reject) => {

            if(data.lpk_id.startsWith(" ")){
                data.lpk_id = data.lpk_id.substring(1);
            }
            if(data.lpk_id.endsWith(" ")){
                data.lpk_id = data.lpk_id.substring(0, 8);
            }
            
            if (String(data.lpk_id.length) == 8 && data.lpk_id.includes("LPK1")) {
                db.get()
                    .collection(collections.CANDIDATES)
                    .findOne({
                        "id": data.lpk_id
                    })
                    .then((response) => {
                        // console.log(response)
                        if (response) {
                            if(data.email.startsWith(" ")){
                                data.email = data.email.substring(1);
                            }
                            if(data.email.endsWith(" ")){
                                data.email = data.email.substring(0, 8);
                            }
                            if(response.email == data.email) {
                                resolve(response)
                            }else if(response.other_email.original == data.email){
                                resolve(response)
                            }else if(response.other_email.corrected == data.email){
                                resolve(response)
                            }else if(response.other_email.hackerearth == data.email){
                                resolve(response)
                            }else{
                                reject("Please enter the correct email address.")
                            }
                        } else {
                            reject("We regret to inform you that we are unable to proceed with your application to the next round. We wish you all the best for your future endeavors.")
                    }
                    }).catch((error) => {
                        reject(error)
                    })
            } else {
                reject("Please enter a valid Launchpad Kerala ID.")
            }
        })
    }
    
}

module.exports = {
    contact,
    candidate
}