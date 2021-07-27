const { transaction: transactionModel } = require('..database/models');

class TransactionController {
  async index(req, res) {
    try {
      const transactions = await transactionModel.findAll();

      // return res.json(transactions);
      let result = res.json(transactions);
      return result;
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const transaction = await transactionModel.findByPk(req.params.id);

      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const transaction = await transactionModel.create(req.body);

      return res.json(transaction);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const transaction = await transactionModel.findByPk(req.params.id);

      await transactionModel.update(req.body);

      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const transaction = await transactionModel.findByPk(req.params.id);

      await transactionModel.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();
