import db from "./db";

import { Inserts } from "../helpers/insert-mulple";

class Transactions {
  constructor() {

  }
  async save(datas) {
    const values = Inserts('${type_transaction}, ${transaction_value}, ${cpf}, ${card_number}, ${date_created}, ${hour_created}, ${store_own}, ${store_name}', datas);
    
    return await db.none('INSERT INTO transactions (type_transaction,transaction_value,cpf,card_number,date_created,hour_created,store_own,store_name) VALUES $1', values);
  }
  async getAll() {
    return await db.query('SELECT * FROM transactions');
  }
}

export default Transactions;