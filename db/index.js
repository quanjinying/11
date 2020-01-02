const mysql = require("mysql");
module.exports = () => {
  //创建链接
  let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "datass" //仓库名
  });
  //链接数据库
  connection.connect(error => {
    if (error) {
      console.log("链接失败");
    } else {
      console.log("链接成功");
    }
  });
  //惭怍数据库
  return new Promise((resolve, reject) => {
    //增删改查
    connection.query("select * from datalist", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
      connection.end(); //输出结果
    });
  });
};
