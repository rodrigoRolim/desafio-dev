import fs from "fs";

export default {
  convertCnabToJson(req, res, next) {

    const datas = fs.readFileSync(req.file.path, 'utf8')
      .toString()
      .split("\n")
      .filter(data => data !== '');

    const records = datas.map(data => {
      return [
        +data.substring(0,1),
        +data.substring(9, 19),
        data.substring(19, 30),
        data.substring(30, 42),
        data.substring(1, 9).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3').split("-").reverse().join("-"),
        data.substring(42, 48).replace(/(\d{2})(\d{2})(\d{2})/g, '$1:$2:$3'),
        data.substring(48, 62),
        data.substring(62, 81)
      ]
    })

    req.records = records;
    next();
  }
}

