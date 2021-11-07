import express from "express";
import TransactionController from "../controllers/transactions.control";
import Transaction from "../models/transactions.model";
import cnabToJson from "../middlewares/json-converter.middle";

import multer from "multer";
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const transactions = new TransactionController(Transaction);

router.get('/', transactions.getAllTransactions);
router.post('/save', upload.single('file'), cnabToJson.convertCnabToJson, transactions.saveTransaction);

export default router;
