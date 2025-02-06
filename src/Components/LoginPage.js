import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from "./Login";



const LoginPage = () => {
  const [text, settext] = useState("");
  const [pass,setpass]=useState("")

  const change=(e)=>{
    settext(e.target.value)

  }
  return (
    <div className="h-screen pt-24 justify-center grid ">
     <Form/>
    </div>
  );
};
export default LoginPage;
