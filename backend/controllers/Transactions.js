const { TransactionModel, UserModel } = require('../database/models');

class TransactionController {
  //Lista todas as transações
  async index(req, res) {
    try {
      const transactions = await TransactionModel.findAll();
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Lista todas uma transação
  async show(req, res) {
    try {
      const transaction = await TransactionModel.findOne({
        where: {
          id: req.params.id,
        },
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

  //Guarda as transações
  async store(req, res) {
    try {
      const transaction = await TransactionModel.create(req.body);
      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Atualiza as transações
  async update(req, res) {
    try {
      const transaction = await TransactionModel.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  //Deleta as transações
  async destroy(req, res) {
    try {
      const transaction = await TransactionModel.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();
