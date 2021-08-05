const { UserModel, TransactionModel } = require('../database/models');

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await UserModel.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: TransactionModel,
          as: 'transactions',
        },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = await UserModel.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await UserModel.findByPk(req.params.id);
      await UserModel.update(req.body);
      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await UserModel.findByPk(req.params.id);
      await UserModel.destroy();
      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
