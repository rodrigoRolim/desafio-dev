import express from "express";
import transactions from "./transactions.route";

const router = express.Router();

router.use('/transactions', transactions);

export default router;
