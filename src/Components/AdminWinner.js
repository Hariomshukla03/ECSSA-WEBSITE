import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const AdminWinner = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [winnerName, setwinnerName] = useState("");
  const [preview, setPreview] = useState("");
  const [winnerProfileUrl, setwinnerProfileUrl] = useState("");
  const [WinnerImageUrl, setWinnerImageUrl] = useState("");
  const [winnerEvent, setwinnerEvent] = useState("");
  const [winnerYear, setwinnerYear] = useState("");
  const Winner = useSelector((store) => store.winners);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Array.isArray(Winner)) {
      setwinnerName(Winner.winnerName);
      setwinnerProfileUrl(Winner.winnerProfileUrl);
      setwinnerEvent(Winner.winnerEvent);
      setwinnerYear(Winner.winnerYear);
    }
  }, []);

  const handleWinner = async (e) => {
    e.preventDefault();
    const tid=toast.loading("Hold on...");
    try {
      if (!Array.isArray(Winner)) {
        const res = await axios.patch(
          BASE_URL + "/winner/edit/" + Winner._id,
          { winnerName, winnerProfileUrl, winnerEvent, winnerYear },
          { withCredentials: true }
        );
        toast.success(res.data.message,{id:tid})
        setTimeout(() => {
          navigate("/winner");
        }, 2000);
      } else {if (!winnerName||
            !winnerProfileUrl||
            !winnerEvent||
            !winnerYear) {
    toast.error( "Fill all the Detail",{ id: tid })
    return;
  }
        const res = await axios.post(
          BASE_URL + "/winner/add",
          { winnerName, winnerProfileUrl, winnerEvent, winnerYear },
          { withCredentials: true }
        );
        toast.success(res.data.message,{id:tid})
        setTimeout(() => {
          navigate("/winner");
        }, 2000);
      }
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      toast.error(err?.response?.data?.message || "Something went wrong",{ id: tid })

    }
  };
  const handleDrag=async(e)=>{
    e.preventDefault();
  }
  const handleDrop=async(e)=>{
    e.preventDefault()
    const file=e.dataTransfer.files[0]
    const prew=URL.createObjectURL(file)
    setPreview(prew)
    const data=new FormData()
    data.append("file",file)
    data.append("upload_preset","cloudImage")
    try {
      const res= await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data
      );
      setwinnerProfileUrl(res.data.secure_url);
      
    } catch (err) {
      console.log(err)
    }
  }
  const handleImage=async(e)=>{
    e.preventDefault()
    const file=e.target.files[0]
    const prew=URL.createObjectURL(file)
    setPreview(prew) 
    const data=new FormData()
    data.append("file",file)
    data.append("upload_preset","cloudImage")
    try {
      const res= await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data
      );
      setwinnerProfileUrl(res.data.secure_url);
      
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="bg-white p-6 shadow-lg rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black font-semibold">Add Winner</h2>
      </div>
      <p className="text-gray-700">Add new Winner details below.</p>

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h3 className="text-xl text-white font-semibold mb-4">
          Add New Winner
        </h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Winner Name
            </label>
            <input
              type="text"
              required
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={winnerName}
              onChange={(e) => setwinnerName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Winner Event Name
            </label>
            <input
              type="text"
              required
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={winnerEvent}
              onChange={(e) => setwinnerEvent(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            
              <label className="text-white text-sm font-medium mb-2">
                Winner Photo
              </label>
              <div
              onDrop={handleDrop}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              className="w-full p-4 items-center relative  border text-center cursor-pointer border-blue-700 border-dotted"
            >
              <h1 className="p-4 sm:text-2xl pointer-events-none">
                Click or drop Image Here
              </h1>
              <input
                type="file"
                className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
               
                onChange={handleImage}
              />
            </div>
            <img className="w-3/6" src={preview}/>
          </div>
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Winner Rank
            </label>
            <input
              type="url"
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={winnerYear}
              onChange={(e) => setwinnerYear(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleWinner}
            >
              {!Array.isArray(Winner) ? "Edit Winner" : "Add Winner"}
            </button>
          </div>
        </form>
        {message && <h1 className="text-red-500 text-xl">{message}</h1>}
      </div>
    </div>
  );
};
export default AdminWinner;
