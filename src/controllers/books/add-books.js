const uuid = require('uuid');
const { createBooks } = require('../../database-functions/create-books');
const generateResponse =require('../../utils/generate-response');

const addBookController = async (req, res, next) => {
    try{
        const{
            body:{
                title='',
                author='',
                publicationYear='',
                isAvailable='',
            },
        } = req;
        const id = uuid.v4();
        const data = {
            id,
            title,
            author,
            publicationYear,
            isAvailable
        };
        await createBooks(data);

        return res.send(generateResponse("book created",data));
    } catch (error) {
        return next(error);
    }
};

module.exports = addBookController;