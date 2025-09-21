import axios from "axios";
import Marquee from "react-fast-marquee";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Data";
import { useNavigate } from "react-router-dom";
import { deleteTeacher, editTeacher } from "../utils/teacherSlice";
// {[
//     {
//       name: "Ms. Samita Bhandari",
//       title: "Head of the Department (ECS)",
//       img: "https://slrtce.in/wp-content/uploads/2020/03/samita.jpg",
//     },
//     {
//       name: "Ms. Manjiri Mangesh Gogate",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2020/06/Manjiri-Mangesh-Gogate.jpg",
//     },
//     {
//       name: "Mrs. Rashmi Maheshwari",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2020/06/Rashmi-Maheshwari.jpg",
//     },
//     {
//       name: "Mr. Vinaykumar Singh",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2020/06/Vinay-Kumar-Singh.jpg",
//     },
//     {
//       name: "Mr. Abhishek Laharia",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2024/02/Untitled.jpg",
//     },
//     {
//       name: "Mrs. Rohini Rathod",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2020/06/Rohini-B.jpg",
//     },
//     {
//       name: "Ms. Aarti Naik",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2020/03/Arrati.jpg",
//     },
//     {
//       name: "Dr. Poorva Waingankar",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2024/05/Untitled1-1.jpg",
//     },
//     {
//       name: "Mrs. Poonam Bawankar",
//       title: "Assistant Professor",
//       img: "https://slrtce.in/wp-content/uploads/2024/05/Untitled-2.jpg",
//     }
//   ]}

  

const Teacher=()=>{
  
const dispatch=useDispatch()
const loginAdmin=useSelector((store)=>store.loginAdmin)
const navigate=useNavigate()
const handleDelete=async(id)=>{
  const res=await axios.delete(BASE_URL+"/teacher/delete/"+id,{withCredentials:true})
  dispatch(deleteTeacher(id))
}
const handleEdit=async(id)=>{
  const res=await axios.get(BASE_URL+"/teacher/view/"+id,{withCredentials:true})
 
  dispatch(editTeacher(res.data))
  navigate("/admindash")
}
    const teacher=useSelector((store)=>store.teachers)

    return(
        <div> 
            <Marquee className="pt-8 w-full" pauseOnHover>
          {Array.isArray(teacher) &&
            teacher.map((teacher) => (
              <div
                key={teacher._id}
                className="w-60 h-72 bg-[#1F2937] m-4 p-4 sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center"
              >
                <div className="w-36 h-36 flex justify-center items-center rounded-full border-2 bg-gray-100 p-1">
                  <img
                    className="w-36 h-36 rounded-full"
                    src={teacher?.teacherImageUrl}
                    alt={"image"}
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">{teacher?.teacherName}</h1>
                  <p className="p-1 text-sm">{teacher?.teacherPosition}</p>
                </div>

                {loginAdmin&&<div className="flex">
                  <MdDelete
                    className="mt-2 size-6 cursor-pointer hover:text-red-500 "
                    onClick={() => handleDelete(teacher._id)}
                  />
                  <FaEdit
                    className="mt-2 mx-4 size-6 cursor-pointer hover:text-blue-400"
                    onClick={() => handleEdit(teacher._id)}
                  />
                </div>}
              </div>
            ))}
        </Marquee>
        </div>
    )
}
export default Teacher;