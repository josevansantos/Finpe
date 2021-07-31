const jwt = require('jsonwebtoken');

const SECRET = '21g12678127r68rg3124f'

const create = data => jwt.sign(data, SECRET);

const verify = token => jwt.verify(token, SECRET);

module.exports = {
    create,
    verify
}