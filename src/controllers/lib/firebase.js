const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getFirestore, doc, setDoc } = require("firebase/firestore");
const { generateResponse } = require('../../../utils/generate-response');
const admin =require('../../config/firebase-config');

let app;
const firestoreDb=admin.firestore();
  


const uploadProcessedData = async () => {
    const dataToUpload = {
        id: 11,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publicationYear: 1925,
        isAvailable: true,
    };
    try{
        await firestoreDb.collection('book-practice1').add(dataToUpload);
    } catch (error) {
        return res.send(generateResponse('error uploadproccesseddata'));
    }
};

const getFirebaseApp = () => app;

module.exports = {
    getFirebaseApp,
    uploadProcessedData,
};

