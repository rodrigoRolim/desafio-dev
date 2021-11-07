import fs from "fs";

export default {
  convertCnabToJson(req, res, next) {

    const datas = fs.readFileSync(req.file.path, 'utf8')
      .toString()
      .split("\n")
      .filter(data => data !== '');

    const records = datas.map(data => {
      return {
        type_transaction: +data.substring(0,1),
        transaction_value: +data.substring(9, 19),
        cpf: data.substring(19, 30),
        card_number: data.substring(30, 42),
        date_created: data.substring(1, 9).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3').split("-").reverse().join("-"),
        hour_created: data.substring(42, 48).replace(/(\d{2})(\d{2})(\d{2})/g, '$1:$2:$3'),
        store_own: data.substring(48, 62),
        store_name: data.substring(62, 81)
      }
    })
    console.log(records);
    req.records = records;
    next();
  }
}

