const { deleteBooks } = require('../../database-functions/del-books');
const generateResponse = require('../../utils/generate-response');

const deleteBookController = async (req, res, next) => {

    try {
        const { id = '' } = req.body;

        if (!id) {
            // Handle case where id is not provided
            return res.status(400).send(generateResponse("Invalid or missing book ID"));
        }

        await deleteBooks(id);
        return res.send(generateResponse("Book Deleted"));
    } catch (error) {
        console.error('Error deleting book:', error);
        return res.status(500).send({ error: 'Error deleting book', details: error });
        // return next(error);
    }

    // try{
    //     const{
    //         body: {id = ''}} = req;

    //         const data = {id};

    //         await deleteBooks(data);
    //         return res.send(generateResponse("Book Deleted"));
    // } catch (error) {
    //     console.error('Error deleting book:', error);
    //     return { error: 'Error deleting book', details: error };
    //     //return next(error);
    // }
};

module.exports = deleteBookController;