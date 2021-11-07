import db from "./index";

export default class Transactions {
  constructor() {

  }
  async save(datas) {
    return await db.query('INSERT INTO transactions(' + 
      'type_transaction,' +
      'transaction_value,' +
      'cpf,' +
      'card_number,' +
      'date_created,' +
      'hour_created,' +
      'store_own,' +
      'store_name) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
      datas.value, 
      datas.cpf,
      datas.cardNumber,
      datas.date,
      datas.hour,
      datas.storeName,
      datas.typeTransaction
    ])
  }
  async getAll() {
    
  }
}