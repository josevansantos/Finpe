const { UserModel, TransactionModel } = require('../database/models');

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.findAll();
      return res.status(200).json(users);
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
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = await UserModel.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await UserModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await UserModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
