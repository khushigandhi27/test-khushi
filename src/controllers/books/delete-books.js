const httpStatus = require('http-status');
const { deleteBooks } = require('../../database-functions/del-books');
const ApiError = require('../../utils/ApiError');
const generateResponse = require('../../utils/generate-response');

const deleteBookController = async (req, res, next) => {

    try {
        const { id = '' } = req.body;
        if (!id) {
            throw new ApiError(httpStatus[400],"not found data");
        }
        await deleteBooks(id);
        return res.send(generateResponse("Book Deleted"));
    } catch (error) {
        return next(error);
    }
};

module.exports = deleteBookController;