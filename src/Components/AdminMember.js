import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { members } from "../utils/memberSlice";
import toast from "react-hot-toast";

const AdminMember = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPosition, setMemberPosition] = useState("");
  const [memberImageUrl, setMemberImageUrl] = useState("");
  const member = useSelector((store) => store.members);
  const dispatch = useDispatch();
  const handleMember = async (e) => {
    e.preventDefault();
    const tid=toast.loading("Hold on...");
    try {
      if (!Array.isArray(member)) {
        const res = await axios.patch(
          BASE_URL + "/member/edit/" + member._id,
          { memberName, memberPosition, memberImageUrl },
          { withCredentials: true }
        );
        toast.success(res.data.message,{id:tid})
        navigate("/about");
      } else {
        if (!memberName || !memberPosition || !preview) {
   
    toast.error( "Fill all the Detail",{ id: tid})
    return;
  }
        const res = await axios.post(
          BASE_URL + "/member/add",
          {
            memberName,
            memberPosition,
            memberImageUrl,
          },
          { withCredentials: true }
        );
        dispatch(members(res.data));
        toast.success(res.data.message,{id:tid})
        setTimeout(() => {
          navigate("/about");
        }, 2000);
      }
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      // setMessage(err.response?.data?.message || "Something went wrong");
      toast.error(err?.response?.data?.message || "Something went wrong",{ id: tid })

    }
  };
  useEffect(() => {
    if (!Array.isArray(member)) {
      setMemberName(member.memberName);
      setMemberPosition(member.memberPosition);
      setMemberImageUrl(member.memberImageUrl);
    }
  }, []);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = async (e) => {
    e.preventDefault();
  
    const file = e.dataTransfer.files[0];
    const prew = URL.createObjectURL(file);
    setPreview(prew);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "cloudImage");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",
        data
      );
      setMemberImageUrl(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };
  const handleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const prew = URL.createObjectURL(file);
    setPreview(prew);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "cloudImage");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data
      );
      setMemberImageUrl(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black font-semibold">Add Member</h2>
      </div>
      <p className="text-gray-700">Add new member details below.</p>

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h3 className="text-xl text-white font-bold mb-4">Add New member</h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Member Name
            </label>
            <input
              type="text"
              required
              value={memberName}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Member title
            </label>
            <input
              value={memberPosition}
              type="text"
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setMemberPosition(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Member Photo{" "}
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
                onChange={handleImage}
                className="bg-gray-700 relative text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>
            <img className="w-3/6" src={preview} />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleMember}
            >
              {!Array.isArray(member) ? "Edit Member" : "Add Member"}
            </button>
          </div>
        </form>
        {/* {message && <h1 className="text-red-500 text-xl">{message}</h1>} */}
      </div>
    </div>
  );
};
export default AdminMember;
