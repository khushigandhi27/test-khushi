const admin =require('../config/firebase-config');
const { COLLECTIONS } = require('../constants/collection-constants');
const db = admin.firestore();

const updateBooks = async bookData => {
    try{
        console.log(bookData);
        await db.collection(COLLECTIONS.BOOKS).doc(bookData.id).update(bookData);
        return true;
    } catch (error) {
        return error;
    }
};

module.exports = {updateBooks};