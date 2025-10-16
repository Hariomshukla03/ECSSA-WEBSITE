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
  navigate("/about")
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
      <div key={teacher._id} className="m-4">
        {/* 3D Black Card with Gradient & Light Reflection */}
        <div className="relative w-64 h-64 overflow-hidden rounded-xl 
                        bg-gradient-to-b from-black/80 via-black/60 to-black/90
                        shadow-[0_15px_25px_rgba(0,0,0,0.5),0_10px_10px_rgba(0,0,0,0.3)]">

          

          <div className="absolute inset-0 rounded-xl pointer-events-none"
               style={{
                 background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)'
               }}></div>

          {/* Card overlay with content */}
          <div className="absolute flex flex-col items-center justify-center text-white z-[1] rounded-xl inset-0.5 bg-black/60 shadow-inner shadow-black/30">
            
            {/* Teacher Image */}
            <div className="w-28 h-28 flex justify-center items-center rounded-full border-2 border-white p-1 mb-2 mt-4">
              <img
                className="w-28 h-28 rounded-full"
                src={teacher?.teacherImageUrl}
                alt="teacher"
              />
            </div>

            {/* Teacher Info */}
            <div className="text-center">
              <h1 className="text-lg font-semibold">{teacher?.teacherName}</h1>
              <p className="p-1 text-sm">{teacher?.teacherPosition}</p>
            </div>

            {/* Admin Actions */}
            {loginAdmin && (
              <div className="flex mt-2">
                <MdDelete
                  className="size-6 cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(teacher._id)}
                />
                <FaEdit
                  className="mx-4 size-6 cursor-pointer hover:text-blue-400"
                  onClick={() => handleEdit(teacher._id)}
                />
              </div>
            )}
          </div>

          {/* Background blur effect */}
          <div className="absolute w-56 h-48 bg-white/10 blur-[50px] -left-1/2 -top-1/2"></div>
        </div>
      </div>
    ))}
</Marquee>

</div>
    )
}
export default Teacher;