// B1: npm init <---> yarn init --- khởi tạo source BE
// B2: cài lib express
//  npm i express <-----> yarn add express
// B3 : thêm type module bên trong file package.json --> ES6

// lưu y: 3 bước đầu chỉ dùng 1 lần duy nhất, dùng lần 2 sẽ ra lỗi

// B4: import thư viện express
import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';

// B5: tạo biến app để start BE
const app = express();
// add middleware để express hiểu body nhận về là object (json)
app.use(express.json()); // 1 middleware
app.use(rootRoutes); // 1 middleware

// B6: setup port cho BE -> 8080
app.listen("8080", () => {
    console.log("BE is starting");
});

// viết API siêu đơn giản
// tạo API GET
// app.get("/get-video", (req, res) => {
//     res.send("Get video 123456");
// });

// app.post("/create-video", (req, res) =>{
//     res.send("Create video");
// });

// // GET video có id là 5, userId = 10 và dùng query
// app.get("/get-video-detail", (req, res)=>{
//     let {id, userId} = req.query;
//     res.send(`get video with id ${id}, ${userId}`);
// });

// // GET video có id là 5, userId = 10 và dùng params
// app.get("/get-video-detail/:id/:userId", (req, res)=>{
//     let {id, userId} = req.params;
//     let {token} = req.headers;
//     res.send(`get video with id ${id}, ${userId}, ${token}`);
// });

// // lưu ý là method GET, DELETE ko có body
// // POST, PUT có body
// // get data từ body
// app.post("/get-body", (req, res)=>{
//     let {hoTen, email} = req.body;
//     res.send(`Get body: ${hoTen}, ${email}`);
// });

// import mysql from 'mysql2';

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: 3307,
//     database: "node38_food"
// });

// app.get("/get-list-user", async (req, res) => {
//     let query = "SELECT * FROM users"; // tạo câu query để tương tác với database
//     try {
//         let data = await conn.promise().query(query);
//         // data = [data trả về từ database, thành phần cấu tạp nên table]
//         res.send(data[0]);
//     }catch (error) {
//         res.send(`error when get list user: ${error}`)
//     }
// });

