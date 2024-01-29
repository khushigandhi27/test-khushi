const admin =require('../config/firebase-config');
const { COLLECTIONS } = require('../constants/collection-constants');
const db = admin.firestore();

const createBooks = async bookData => {
    try{
        console.log(bookData);
        await db.collection(COLLECTIONS.BOOKS).doc(bookData.id).create(bookData);
        return true;
    } catch (error) {
        return error;
    }
};

module.exports = {createBooks};