const { TransactionModel, UserModel } = require('../database/models');

class TransactionController {
  //Lista todas as transações
  async index(req, res) {
    try {
      const transactions = await TransactionModel.findAll({
        order: [['date', 'desc']],
      });
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Lista uma transação pelo id
  async show(req, res) {
    try {
      const transaction = await TransactionModel.findAll({
        include: {
          model: UserModel,
          as: 'user',
        },
      });
      return res.status(200).json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const transaction = await TransactionModel.create(req.body);
      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const transaction = await TransactionModel.findByPk(req.params.id);
      await TransactionModel.update(req.body);
      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const transaction = await TransactionModel.findByPk(req.params.id);
      await TransactionModel.destroy();
      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();
