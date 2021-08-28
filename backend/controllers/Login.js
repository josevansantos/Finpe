const { UserModel } = require('../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class AuthController {
  static async login(req, res) {
    try {
      const user = await UserModel.findOne({
        attributes: ['id', 'email', 'password', 'name', 'isAdmin'],
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(401).json({ error: 'Usuário ou a senha incorreta!' });
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          erro: 'Usuário ou a senha incorreta!',
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        process.env.SECRET,
        { expiresIn: '1d' }
      );

      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static validaToken(req, res) {
    UserModel.findByPk(req.userId, {
      attributes: ['id', 'name', 'email'],
    })
      .then((user) => {
        return res.json({
          erro: false,
          user,
        });
      })
      .catch(() => {
        return res.status(400).json({
          erro: true,
          mensagem: 'Erro: Necessário realizar o login para acessar a página!',
        });
      });
  }

  static async register(req, res) {
    try {
      const user = await UserModel.create(req.body);
      return res.status(200).res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = AuthController;
