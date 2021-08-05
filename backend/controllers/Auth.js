const { UserModel } = require('../database/models');
const { create } = require('../helpers/jwt');

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ where: { email, password } });

      if (!user) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos' });
      }

      const token = create({
        id: user.id,
        name: user.name,
        email: user.email,
      });

      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async register(req, res) {
    try {
      const user = await UserModel.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = AuthController;
