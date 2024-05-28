import { useLocation } from "react-router-dom"
import { Heading } from "../components/Heading";

export const PostTransaction= ()=>{
    const {state}=useLocation();
    return <div>
    <Heading label={state.code===200?"Transaction Successful":"Transaction Unsuccessful"}/>
    </div>
}