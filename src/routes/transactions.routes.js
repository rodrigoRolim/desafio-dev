import express from "express";
import TransactionController from "../controllers/transactions.controller";
import Transaction from "../models/transactions.model";

const router = express.Router();
const transactions = new TransactionController(Transaction);

router.get('/', transactions.getAllTransactions);

module.exports = router;