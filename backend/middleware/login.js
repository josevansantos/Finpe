const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  validaToken: async function (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Necessário realizar o login para acessar a página!',
      });
    }
    const [, token] = authHeader.split(' ');

    if (!token) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: Necessário realizar o login para acessar a página!',
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.userId = decoded.id;
      return next();
    } catch (err) {
      return res.status(401).json({
        erro: true,
        mensagem: 'Erro: Necessário realizar o login para acessar a página!',
      });
    }
  },
};
