const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addBookValidator = checkSchema ({
  title:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'title'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'title'),
    },
  },
  author: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace(
        '{{ input }}',
        'author',
      ),
    },
  },
  publicationYear: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'publicationYear',
      ),
    },
  },
  isAvailable: {
    optional: true,
    isBoolean: {
      errorMessage: getMessage('INPUT_YES_OR_NO').replace(
        '{{ input }}',
        'isAvailable',
      ),
    },
  },
});

module.exports = addBookValidator;