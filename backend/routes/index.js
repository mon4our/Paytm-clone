const express=require("express");
const cors=require("cors");

app.use(cors());
app.use(express.json());

const userRouter=require("./user")
const accountRouter=require("./accounts")

const app=express();

const router=express.Router();

router.use("/user",userRouter)
router.use("/account",accountRouter)

module.exports=router;