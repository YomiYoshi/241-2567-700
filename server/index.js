/*
const http = require('http'); // Import Node.js core module

const host = 'localhost'; // Localhost
const port = 8000; // Port number

// กำหนด listener ให้กับ server เมื่อปิด เว็บไปที่ http://localhost:8000 จะเรียกใช้งาน function requireListener
const requireListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!"); 
}

const server = http.createServer(requireListener); 
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
*/

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []

let conn = null
const initMySQL = async () => {
   conn = await mysql.createConnection({
    host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'webdb',
      port: 8820
     })
    }
/*
app.get('/testdbnew',async (req, res) => {
  try {
     const results = await conn.query('Select * FROM user')
     res.json(results[0])
  } catch (error) {
    console.log('error',error.message)
    res.status(500).json({error: 'Error fetching users'})
  } 
})
/*
GET /users ใช้สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /userห ใช้สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id ใช้สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id ใช้สำหรับลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
*/

//path= GET /users ใช้สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async(req, res) => {
  const results = await conn.query('Select * FROM user')
      res.json(results[0])
})

// path= POST/users ใช้สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async(req, res) => {
  let user = req.body;
  const results = await conn.query('INSERT INTO user SET ?', user)
  
  console.log('results', results)
  res.json({
    message: "Create user successfully",
    data: results[0]
  })
})

//path= GET /users/:id สำหรับดึง users รายคนออกมา
app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  // ค้นหา  users หรือ index ที่ต้องการดึงข้อมูล
  let selectedIndex = users.findIndex(user => user.id == id)
  res.json(users[selectedIndex])
});


//path: PUT /users/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id เป็นตัวเเปร
app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let upadateUser = req.body;
  // หา users จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)
  
    users[selectedIndex].firstname = upadateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = upadateUser.lastname || users[selectedIndex].lastname
    users[selectedIndex].age = upadateUser.age || users[selectedIndex].age
    users[selectedIndex].gender = upadateUser.gender || users[selectedIndex].gender

  res.json({
      message: "Update user successfully",
      data: {
        user:upadateUser,
        indexUpdate: selectedIndex
      }
  })
  // users ที่ upadate ใหม่ update กลับไปเก็บใน users เดิม
})

//path: DELETE /users/:id ใช้สำหรับลบข้อมูล user ที่มี id เป็นตัวเเปร
app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  // หา index ของ user ที่ต้องการลบ
  let selectedIndex = users.findIndex(user => user.id == id)
  // ลบ 

   users.splice(selectedIndex, 1)
   res.json({
      message: "Delete user successfully",
      indexDelete: selectedIndex
    })
  })

app.listen(port, async(req, res) => {
  await initMySQL()
  console.log('Http server is running on port' + port);
});

