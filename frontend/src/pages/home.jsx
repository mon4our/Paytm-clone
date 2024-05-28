import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"

export const Home = () => {
    const navigate = useNavigate();
    return <div>
        <center>
            <div className="flex flex-col items-center">
                <div>
                    <Heading label={"PayTM App"} />
                    <SubHeading label={"A site created by Mohit Ruwatia using the MERN stack"} />
                </div>
                <div className="rounded-lg bg-slate-950	m-10 w-80 text-center p-2 h-max px-4">
                    <SubHeading label={"New to the site?"} />
                    <Button label={"Sign Up"} onClick={() => {
                        navigate("/signup");
                    }} />
                </div>
                <div className="rounded-lg bg-slate-950	m-10 w-80 text-center p-2 h-max px-4">
                    <SubHeading label={"Already Registered?"} />
                    <Button label={"Sign In"} onClick={() => {
                        navigate("/signin");
                    }} />
                </div>
            </div>

        </center>
    </div>
}