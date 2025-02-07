import React, { useState } from "react";

const DeadshotRegistration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    captainEmail: "",
    captainPhone: "",
    captainYear: "",
    member2: "",
    member3: "",
    member4: "",
    familiarWithGame: "",
    teamStrategy: "",
  });

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const API_URL = "https://v1.nocodeapi.com/vaibhavslrtce/google_sheets/PgfzQslRttYEKbqj?tabId=Sheet1";
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/CzyqyhGUWdiANen4jQeu9K";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.teamName ||
      !formData.captainName ||
      !formData.captainEmail ||
      !formData.captainPhone ||
      !formData.captainYear ||
      !formData.member2 ||
      !formData.familiarWithGame ||
      !formData.teamStrategy
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          [
            formData.teamName,
            formData.captainName,
            formData.captainEmail,
            formData.captainPhone,
            formData.captainYear,
            formData.member2,
            formData.member3,
            formData.member4,
            formData.familiarWithGame,
            formData.teamStrategy,
          ],
        ]),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          teamName: "",
          captainName: "",
          captainEmail: "",
          captainPhone: "",
          captainYear: "",
          member2: "",
          member3: "",
          member4: "",
          familiarWithGame: "",
          teamStrategy: "",
        });
        setMessage("");
      } else {
        const errorData = await response.json();
        setMessage(`Error submitting form: ${errorData.message || "Please try again."}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-6">
          Deadshot Registration
        </h2>

        {submitted ? (
          <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzz_SevQoCoRmOARQ7bi649XowIEN6NzX7zu9gvHq1Xy_oy9m3gys0waN_N7TCwUzIiM&usqp=CAU" alt="Submitted" className="mx-auto w-24 h-24 mb-4" />
            <p className="text-yellow-400">Registration successful!</p>
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg"
            >
              Join WhatsApp Group (Captains Only)
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <img className="pb-4" src="/assets/deadshort.jpeg" alt="Deadshot Tournament" />
            <p>
              <strong>Survival of the Fittest:</strong> Step into an intense online battleground
              in a high-stakes Deadshot gaming tournament! Outsmart, outshoot, and outlast your
              opponents to claim victory.
            </p>
            <br />

            {[
              { label: "Team Name", name: "teamName" },
              { label: "Team Leader’s Full Name", name: "captainName" },
              { label: "Team Leader’s Email ID", name: "captainEmail" },
              { label: "Team Leader’s Contact Number", name: "captainPhone" },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-gray-300">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
            ))}

            {/* Dropdown for Captain's Year */}
            <div className="mb-4">
              <label className="block text-gray-300">Team Leader’s Year of Study</label>
              <select
                name="captainYear"
                value={formData.captainYear}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                required
              >
                <option value="">Select Year</option>
                <option value="SE">FE (1nd Year)</option>
                <option value="SE">SE (2nd Year)</option>
                <option value="TE">TE (3rd Year)</option>
                <option value="BE">BE (4th Year)</option>
              </select>
            </div>

            {/* Team Members */}
            {[
              { label: "Member 2: Full Name, Email ID & Year", name: "member2", required: true },
              { label: "Member 3: Full Name, Email ID & Year (Optional)", name: "member3", required: false },
              { label: "Member 4: Full Name, Email ID & Year (Optional)", name: "member4", required: false },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-gray-300">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                  required={field.required}
                />
              </div>
            ))}

            {/* Familiar with Deadshot Gameplay */}
            <div className="mb-4">
              <label className="block text-gray-300">Are all team members familiar with Deadshot gameplay?</label>
              <select
                name="familiarWithGame"
                value={formData.familiarWithGame}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Preferred Team Strategy */}
            <div className="mb-4">
              <label className="block text-gray-300">Preferred Team Strategy</label>
              <select
                name="teamStrategy"
                value={formData.teamStrategy}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-600 rounded-lg"
                required
              >
                <option value="">Select Strategy</option>
                <option value="Aggressive">Aggressive</option>
                <option value="Defensive">Defensive</option>
                <option value="Balanced">Balanced</option>
                <option value="Not Decided">Not Decided</option>
              </select>
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

export default DeadshotRegistration;
