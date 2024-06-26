const express=require("express");
const router=express.Router();

const zod=require("zod");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

const {User, Account}=require("../db");

const {authMiddleware}=require("../middleware");


const signupSchema=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    fname:zod.string(),
    lname:zod.string()
})
router.get("/",(req,res)=>{
    res.send("hello")
})
router.post("/signup",async (req,res)=>{
    const {success}=signupSchema.safeParse(req.body);
    if(!success){
            return res.status(411).json({
                msg:"Email already taken/ Incorrect Inputs"
            })
    }
    const user = await User.findOne({
        username:req.body.username
    });
    if(user){
        return res.status(411).json({ 
            msg:"Email already taken/ Incorrect Inputs"
        })
    }
    const dbuser=await User.create({
        username: req.body.username,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname
    });
    const userRef=dbuser._id;
    await Account.create({
        userId: userRef,
        balance: 1+Math.random()*10000
    })
    const token=jwt.sign({
        userId:dbuser._id
    },JWT_SECRET);

    res.json({
        msg:"User created successfully",
        token:token
    })
})
const signinSchema=zod.object({
    username: zod.string().email(),
    password: zod.string()
});
router.post("/signin",async(req,res)=>{
    const body=req.body;
    const {success}=signinSchema.safeParse(req.body);
    if(!success){
        return res.json({
            msg:"Incorrect Inputs"
        })
    }
    const user=await User.findOne({
        username: body.username,
        password: body.password
    })
    if (user){
        const token=jwt.sign({
            userId: user._id
        },JWT_SECRET);
        res.json({
            token:token
        })
        return;
    }
    res.json({
        msg: "Error while logging in"
    })
})
const updateBody=zod.object({
    password: zod.string().optional(),
    fname: zod.string().optional(),
    lname: zod.string().optional()
});
router.put("/",authMiddleware,async (req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg: "Error while updating information"
        });
    }
    await User.updateOne(req.body,{
        id: req.userId
    })
    res.json({
        msg:"User updated successfully"
    });
})
router.get("/active",async (req,res)=>{
    const filter=req.query.filter || "";
    const users=await User.find({
        $or: [{
            fname: {
                "$regex": filter
            }
        },{
            lname: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(a=>({
            username: a.username,
            fname: a.fname,
            lname: a.lname,
            _id: a._id
        }))
    })
})
module.exports=router;