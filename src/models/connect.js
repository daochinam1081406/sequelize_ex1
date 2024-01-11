import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

try {
  await sequelize.authenticate(); // xác minh là đã connect tới database thành công hay chưa
  console.log("Kết nối thành công");
} catch (error) {
  console.log("Kết nối thất bại!");
}
