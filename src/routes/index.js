import express from "express";
import transactions from "./transactions.routes";

const router = express.Router();

router.use('/transactions', transactions);

export default router;
