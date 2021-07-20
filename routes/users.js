const express = require('express')
const router = express.Router();
const x=require('../controllers/users');
let users =[
    {
        "id":1,
    "firstname":"jhon",
    "lastname":"Doe",
    "age":25
},
    {
        "id":2,
    "firstname":"jane",
    "lastname":"Doe",
    "age":20
},
    {
    "id":3,
    "firstname":"shaun",
    "lastname":"murphy",
    "age":25
},
]

router.get("/users",x.getUsr)                                                                 
router.post("/users",x.createUser)
router.get("/:id",x.getByid)
router.delete("/:id",x.deleteById)
router.patch("/:id",x.patchById)
module.exports= router