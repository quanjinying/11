const mysql = require("mysql");
module.exports = () => {
  let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "datass"
  });
  connection.connect(error => {
    if (error) {
      console.log("链接失败");
    } else {
      console.log("链接成功");
    }
  });

  return new Promise((resolve, reject) => {
    connection.query("select * from datalist", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
      connection.end();
    });
  });
};
