import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const LoginPage = () => {
  const [text, settext] = useState("");
  const [pass,setpass]=useState("")

  const change=(e)=>{
    settext(e.target.value)

  }
  return (
    <div className="h-[54rem] justify-center grid ">
      <div className="text-center mt-[8rem] p-8 bg-green-600 h-[19rem] w-[20rem] ">
        <div className="py-6 font-bold">
          <label>Login</label>
          <input
            className="text-black  p-[0.05rem]"
            type="text"
            value={text}
            onChange={change}
          ></input>
        </div>
        <div className="font-bold">
          <label value={pass} onChange={(e)=>setpass(e.target.value)}>Password<span></span></label>
          <input
            className="text-black p-[0.05rem]"
            type="Password"
            placeholder="Password"
          ></input>
        </div>
        <div className="mt-8  rounded-md border-2 hover:bg-black w-[150px] ml-[3.5rem]">
          <button >Login</button>
        </div>
        <div className="text-black font-semibold pt-3">
          <h6>Note: This login is only for Admin</h6>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
