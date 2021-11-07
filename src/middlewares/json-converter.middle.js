import fs from "fs";

export default {
  convertCnabToJson(req, res, next) {

    const datas = fs.readFileSync(req.file.path, 'utf8')
      .toString()
      .split("\n")
      .filter(data => data !== '');

    const records = datas.map(data => {
      return {
        type: data.substring(0,1),
        date: data.substring(1, 9),
        value: data.substring(9, 19),
        cpf: data.substring(19, 30),
        card: data.substring(30, 42),
        hour: data.substring(42, 48),
        owner: data.substring(48, 62),
        store: data.substring(62, 81)
      }
    })
    
    req.records = records;
    next();
  }
}

