import axios from "axios";
import { BASE_URL } from "../utils/Data";
import { useState, useEffect, useRef } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLastDate, setEventLastDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [eventReq, setEventReq] = useState("");
  const [eventForm, setEventForm] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const event = useSelector((store) => store.events);
  const [photoUrl, setPhotoUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const fileRef=useRef(null)

  useEffect(() => {
    if (!Array.isArray(event)) {
      setEventName(event.eventName);
      setEventDate(event.eventDate);
      setEventLastDate(event.eventLastDate);
      setEventVenue(event.eventVenue);
      setEventReq(event.eventReq);
      setPhotoUrl(event.photoUrl);
      setEventForm(event.eventForm);
    }
  }, []);
  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview); // Local preview
    
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "cloudImage"); 
  
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",
        data
      );
      if(res.data.secure_url){
        setPhotoUrl(res.data.secure_url)
      }
    } catch (err) {
      console.error("Cloudinary upload Error:", err);
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Array.isArray(event)) {
        const res = await axios.patch(
          `${BASE_URL}/event/edit/${event._id}`,
          {
            eventName,
            eventDate,
            eventLastDate,
            eventVenue,
            eventReq,
            photoUrl,
            eventForm,
          },
          { withCredentials: true }
        );
        setMessage(res.data.message);
        setTimeout(() => {
          navigate("/announcement");
        }, 300);
      } else {
        const res = await axios.post(
          `${BASE_URL}/event/add`,
          {
            eventName,
            eventDate,
            eventLastDate,
            eventVenue,
            eventReq,
            photoUrl,
            eventForm,
          },
          { withCredentials: true }
        );
        setMessage(res.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    } catch (err) {
      console.log(err);
      setMessage(err.response?.data?.message || "Something went wrong");
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };
  const handleDrop = async(e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview); 
    const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "cloudImage"); // your unsigned preset name
      
    try{const res=await axios.post("https://api.cloudinary.com/v1_1/dzhhngakg/image/upload",data)
      if(res.data.secure_url){
        setPhotoUrl(res.data.secure_url)
      }}
    catch(err){
      console.log(err)
    }

  }
  const handleDrag=(e)=>{
    e.preventDefault();
    e.stopPropagation();

  }
  

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black font-semibold">
          {event.length > 0 ? "Edit Event" : "Add Event"}
        </h2>
      </div>
      <p className="text-gray-700">
        {!Array.isArray(event)
          ? "Edit the event details below."
          : "Add new event details below."}
      </p>

      <div className="bg-gray-800 p-6 rounded-lg mt-4">
        <h3 className="text-xl text-white font-semibold mb-4">
          {!Array.isArray(event) ? "Edit Event" : "Add New Event"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Name
            </label>
            <input
              type="text"
              value={eventName}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Starting Date
            </label>
            <input
              type="date"
              value={eventDate}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Last Date
            </label>
            <input
              type="date"
              value={eventLastDate}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventLastDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Venue
            </label>
            <input
              type="text"
              value={eventVenue}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventVenue(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Requirements
            </label>
            <textarea
              value={eventReq}
              rows="3"
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventReq(e.target.value)}
            />
          </div>
          <div className="space-y-6">
      <div
        onDrop={handleDrop}
        onDragOver={handleDrag} 
        onDragLeave={handleDrag}
        className="w-full p-4 items-center relative  border text-center cursor-pointer border-blue-700 border-dotted"
      >

        <h1 className="p-4 sm:text-2xl pointer-events-none">Click or drop Image Here</h1>
        {/* File input is hidden but functional */}
        <input
          type="file"
          ref={fileRef}
          className="" 
          onChange={handleImage}
        />
      </div>

      {previewUrl && <img className="w-2/4 h-56" src={previewUrl} alt="Preview" />}
    </div>
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium mb-2">
              Event Form URL
            </label>
            <input
              type="url"
              value={eventForm}
              className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEventForm(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {!Array.isArray(event) ? "Update Event" : "Add Event"}
            </button>
          </div>
        </form>
        {message && <h1 className="text-red-500 text-xl">{message}</h1>}
      </div>
    </div>
  );
};

export default AdminEvent;
