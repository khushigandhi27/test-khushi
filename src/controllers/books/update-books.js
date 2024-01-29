const uuid = require('uuid');
const { updateBooks } = require('../../database-functions/upd-books');
const lodash =require('lodash');
const generateResponse =require('../../utils/generate-response');

const updateBookController = async (req, res, next) => {
    try{
        const{
            body:{
                id,
                title,
                author,
                publicationYear,
                isAvailable,
            },
        } = req;

        let data = {
            id,
            title,
            author,
            publicationYear,
            isAvailable
        };
        data = lodash.pickBy(data, lodash.identity);
        await updateBooks(data);

        return res.send(generateResponse("book updated",data));
    } catch (error) {
        return next(error);
    }
};

module.exports = updateBookController;