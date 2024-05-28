import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/signUp";
import { Signin } from "./pages/signIn";
import { Dashboard } from "./pages/dashboard";
import { SendMoney } from "./pages/sendMoney";
import { PostTransaction } from "./pages/postTransaction";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/transaction" element={<PostTransaction />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App