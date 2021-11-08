import db from "./db";
import format from "pg-format";

class Transactions {
  constructor() {

  }
  async save(datas) {  
    return await db.query(format('INSERT INTO transactions (type_transaction,transaction_value,cpf,card_number,date_created,hour_created,store_own,store_name) VALUES %L', datas));
  }
  async getAll() {
    return await db.query('SELECT * FROM transactions');
  }
}

export default Transactions;