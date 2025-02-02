class TransactionController {
  
  constructor(Transactions) {
    this.transactions = Transactions;
  }
  
  saveTransaction(req, res) {
   
    return this.transactions.save(req.records)
      .then(resp => res.send(resp))
      .catch(err => res.status(500).send(err)); 
  }
  getAllTransactions(req, res) {
    return this.transactions.getAll()
      .then(resp => res.send(resp))
      .catch(err => res.status(404).send(err));
  }
}
export default TransactionController;