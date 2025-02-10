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
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

/*
GET /users ใช้สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /userห ใช้สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id ใช้สำหรับแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id ใช้สำหรับลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
*/

//path= GET /users ใช้สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
  res.json(users);

});

// path= POST/users ใช้สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter
  counter += 1
  users.push(user);
  res.json({
      message: "Create new user successfully.",
      user: user
  });
});

//path: PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id เป็นตัวเเปร
app.put('/user/:id', (req, res) => {
  let id = req.params.id;
  let upadateUser = req.body;
  // หา users จาก id ที่ส่งมา
  let selectedIndex = users.findIndex(user => user.id == id)
  
  // เเก้ไขข้อมูล user ที่หาเจอ
  if(upadateUser.firstname) {
    users[selectedIndex].firstname = upadateUser.firstname
  }
  if(upadateUser.lastname) {
    users[selectedIndex].lastname = upadateUser.lastname
  }

  res.json({
      message: "Update user successfully",
      data: {
        user:upadateUser,
        indexUpdate: selectedIndex
      }
  })
  //  users ที่ upadate ใหม่ update กลับไปเก็บใน users เดิม
})

//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user ที่มี id เป็นตัวเเปร
app.delete('/user/:id', (req, res) => {
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

app.listen(port, (req, res) => {
  console.log('Http server is running on port' + port);
});