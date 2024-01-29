const admin =require('../config/firebase-config');
const { COLLECTIONS } = require('../constants/collection-constants');
const db = admin.firestore();

const deleteBooks = async bookData => {
    try{
        console.log('Deleting book with ID:', bookData);
        await db.collection(COLLECTIONS.BOOKS).doc(bookData).delete();
        console.log('Book deleted successfully.');
        return true;
    } catch (error) {
        return error;
    }
};

module.exports = {deleteBooks};