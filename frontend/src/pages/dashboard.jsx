import axios from "axios"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/User"
import { useEffect, useState } from "react"

export const Dashboard = () => {
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
        async function getBal ()
        {const bal=await axios.get("http://localhost:3000/api/v1/account/balance",{headers: {"Authorization": "Bearer "+localStorage.getItem("token")}});
        setBalance(bal.data.balance);}
        getBal();
    },[])
    
    // console.log(bal.data.balance)
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={Math.floor(balance)} />
            <Users />
        </div>
    </div>
}