import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AdminTeacher = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [teacherName, setteacherName] = useState("");
  const [teacherPosition, setteacherPosition] = useState("");
  const [teacherImageUrl, setteacherImageUrl] = useState("");
  const [preview, setPreview] = useState("");
  const teacher = useSelector((store) => store.teachers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Array.isArray(teacher)) {
      setteacherName(teacher.teacherName);
      setteacherPosition(teacher.teacherPosition);
      setteacherImageUrl(teacher.teacherImageUrl);
    }
  }, []);

  const handleTeacher = async (e) => {
    e.preventDefault();
    try {
      if (!Array.isArray(teacher)) {
        const res = await axios.patch(
          BASE_URL + "/teacher/edit/" + teacher._id,
          { teacherName, teacherPosition, teacherImageUrl },
          { withCredentials: true }
        );
        setMessage(res.data.message);
        setTimeout(() => {
          navigate("/about");
        }, 2000);
      } else {
        const res = await axios.post(
          BASE_URL + "/teacher/add",
          { teacherName, teacherPosition, teacherImageUrl },
          { withCredentials: true }
        );
        setMessage(res.data.message);
        setTimeout(() => {
          navigate("/about");
        }, 2000);
      }
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };
  const handleDrag=(e)=>{
    e.preventDefault()

  }
  const handleDrop=async(e)=>{
    e.preventDefault();
    const file=e.dataTransfer.files[0]
    if(!file)return;
    const prew=URL.createObjectURL(file)
    setPreview(prew)
    const data=new FormData()
    data.append("file",file)
    data.append("upload_preset","cloudImage")
    try{
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data
      );
      console.log(res)
      setteacherImageUrl(res.data.secure_url)

    }catch(err){
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
      const res=await axios.post("https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data
      );
      console.log(res)
      setteacherImageUrl(res.data.secure_url)

    } catch (err) {
      console.log(err)
      
    }

  }

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black font-semibold">Add Teacher</h2>
      </div>
      <p className="text-gray-700">Add new Teacher details below.</p>

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h3 className="text-xl text-white font-semibold mb-4">
          Add New teacher
        </h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Teacher Name
            </label>
            <input
              type="text"
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={teacherName}
              onChange={(e) => setteacherName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Teacher title
            </label>
            <input
              type="text"
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={teacherPosition}
              onChange={(e) => setteacherPosition(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Teacher Photo
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
            <img className="w-3/6" src={preview}></img>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleTeacher}
            >
              {!Array.isArray(teacher) ? "Edit Teacher" : "Add Teacher"}
            </button>
          </div>
        </form>
        {message && <h1 className="text-red-500 text-xl">{message}</h1>}
      </div>
    </div>
  );
};
export default AdminTeacher;
