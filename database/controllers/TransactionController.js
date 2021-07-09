const { TransactionModel } = require("../models");

class TransactionController {
  async index(req, res) {
    try {
      const transactions = await TransactionModel.findAll();

      // return res.json(transactions);
      let result = res.json(transactions);
      return result;
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const transaction = await TransactionModel.findByPk(req.params.id);

      return res.json(transaction);
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

      await transaction.update(req.body);

      return res.json({ transaction });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const transaction = await TransactionModel.findByPk(req.params.id);

      await transaction.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TransactionController();
