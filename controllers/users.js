const { v4: uuidv4 } = require('uuid');

exports.createUser = (req,res)=>{
    const body = req.body;
    const userId= uuidv4();
    const userWithID= {...body,id:userId}
    users.push(userWithID)
    res.send(userWithID)

}
exports.getUsr=(req,res)=>{
    res.send(users);
    // res.send("HEllo from home page");

}

exports.getByid=(req,res)=>{
    const id = req.params.id;
    const found=users.find((user)=>user.id==id);
    console.log(found);
    res.send("45132");
}


exports.deleteById=(req,res)=>{
    const {id}= req.params;
    users=users.filter((user)=>user.id!==id);
    // console.log(ans);

    res.send(users)
}

exports.patchById=(req,res)=>{
    const {id}=req.params;
    const {firstname,lastname,age}=req.body;
    const user=users.find((user)=>user.id===id);

    if(firstname){
        user.firstname=firstname
    }
    if(lastname){
        user.lastname=lastname
    }
    if(age){
        user.age=age
    }
    res.send("updated")


};