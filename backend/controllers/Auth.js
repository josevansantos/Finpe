const { UserModel } = require('../database/models');
const { create } = require('../helpers/jwt');
const bcrypt = require('bcryptjs');

class AuthController {
  static async login(req, res) {
    try {
      const user = await UserModel.findOne({
        attributes: ['id', 'email', 'password', 'name'],
        where: { email: req.body.email },
      });

      if (user === null) {
        return res.status(401).json({ error: 'Usuário ou a senha incorreta!' });
      }

      if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).json({
          erro: 'Usuário ou a senha incorreta!',
        });
      }

      const token = create(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        { expiresIn: '1d' }
      );

      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async validaToken(req, res) {
    await UserModel.findByPk(req.userId, {
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
