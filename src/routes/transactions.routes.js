import express from "express";
import TransactionController from "../controllers/transactions.control";
import Transactions from "../models/transactions.model";
import cnabToJson from "../middlewares/json-converter.middle";

import multer from "multer";
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const transactionsModel = new Transactions();

const transactions = new TransactionController(transactionsModel);

router.get('/', transactions.getAllTransactions);
router.post('/save', upload.single('file'), cnabToJson.convertCnabToJson, (req, res) => transactions.saveTransaction(req, res));

export default router;
