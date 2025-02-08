import React, { useEffect, useState } from "react";

const DecodeDiscoverRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    yearOfStudy: "",
    branch: "",
    researchFamiliarity: "",
    workPreference: "",
    specialAssistance: "",
    consent: false,
  });
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const API_URL = "https://v1.nocodeapi.com/vaibhavslrtce/google_sheets/WFoZrdOTjUVDFveL?tabId=Sheet1";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.yearOfStudy || !formData.branch || !formData.researchFamiliarity || !formData.workPreference || !formData.consent) {
      setMessage("Please fill in all required fields and agree to the consent checkbox.");
      return;
    }

    const newEntry = [
      formData.fullName,
      formData.email,
      formData.contactNumber,
      formData.yearOfStudy,
      formData.branch,
      formData.researchFamiliarity,
      formData.workPreference,
      formData.specialAssistance,
      formData.consent ? "Yes" : "No",
    ];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( [newEntry] ),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          yearOfStudy: "",
          branch: "",
          researchFamiliarity: "",
          workPreference: "",
          specialAssistance: "",
          consent: false,
        });
      } else {
        setMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black mt-16 text-white">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-6">Decode & Discover Registration</h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-yellow-400">Registration successful!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
             <img className="pb-4" src="/assets/Decode.png" alt="Deadshot Tournament" />
            {[
              { label: "Full Name", name: "fullName", type: "text", required: true },
              { label: "Email ID", name: "email", type: "email", required: true },
              { label: "Contact Number", name: "contactNumber", type: "text", required: true },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-gray-300">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required={field.required}
                />
              </div>
            ))}
            {[
              { label: "Year of Study", name: "yearOfStudy", options: ["FE","SE", "TE", "BE"], required: true },
              { label: "Branch", name: "branch", options: ["Electronics & Computer Science", "Other"], required: true },
              { label: "Are you familiar with research papers?", name: "researchFamiliarity", options: ["Yes", "No", "Somewhat"], required: true },
              { label: "Do you prefer working alone or in a team?", name: "workPreference", options: ["Alone", "Team"], required: true },
            ].map((selectField) => (
              <div key={selectField.name} className="mb-4">
                <label className="block text-gray-300">{selectField.label}</label>
                <select
                  name={selectField.name}
                  value={formData[selectField.name]}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                  required={selectField.required}
                >
                  <option value="">Select an option</option>
                  {selectField.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-300">Do you require any special assistance? (Optional)</label>
              <input type="text" name="specialAssistance" value={formData.specialAssistance} onChange={handleChange} className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" required />
                I agree to participate fairly and follow the event rules.
              </label>
            </div>
            <button type="submit" className="w-full py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg">
              Register
            </button>
          </form>
        )}
        {message && <p className="mt-4 text-center text-yellow-400">{message}</p>}
      </div>
    </div>
  );
};

export default DecodeDiscoverRegistration;
