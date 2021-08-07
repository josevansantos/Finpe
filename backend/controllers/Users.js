const { UserModel, TransactionModel } = require('../database/models');
const bcrypt = require('bcryptjs');

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.findAll({
        attributes: ['id', 'name', 'email', 'password'],
      });
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await UserModel.findOne({
        attributes: ['id', 'name', 'email'],
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
    const dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);
    try {
      const user = await UserModel.create(dados);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    const dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);
    try {
      const user = await UserModel.update(dados, {
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
