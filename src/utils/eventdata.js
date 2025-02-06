import React from "react";
import Card from "./EventCard"; // Import the reusable component

const events = [
  {
    title: "TypeSprint (Speed Typing Competition)",
    date: "Monday, February 10th, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 311 (Lab 312 if additional space is needed)",
    objective: "To enhance participants' typing speed and accuracy, essential for coding and documentation.",
    structure: [
      "Setup: Each participant will be assigned a system with typing test software.",
      "Round 1: Basic Typing Challenge (Speed & Accuracy Test)",
      "Round 2: Code Snippet Typing Challenge (Syntax Precision Test)",
      "Final Showdown: Top participants compete in an extreme-speed round."
    ],
    criteria: ["Speed (Words Per Minute)", "Accuracy (Least errors)", "Proper formatting in coding round"],
    requirements: ["Pre-installed typing test software", "Evaluation sheets for scores", "Volunteers for monitoring"]
  },
  {
    title: "Survival of the Fittest (Tech Challenge)",
    date: "Tuesday, February 11th, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 311 (Lab 312 if additional space is needed)",
    objective: "To test students' adaptability and problem-solving skills through a series of tech-based challenges.",
    structure: [
      "Round 1: Logical & Debugging Challenge - Solve logic puzzles and debug code.",
      "Round 2: Quick Coding Sprint - Time-based coding tasks.",
      "Round 3: Final Survival Challenge - Solve real-world tech scenarios."
    ],
    criteria: ["Logical reasoning and accuracy", "Efficiency of code solutions", "Problem-solving under time constraints"],
    requirements: ["Laptops/PCs with coding platforms", "Question sets for challenges", "Judges for evaluating solutions"]
  },
  {
    title: "Decode & Discover (Treasure Hunt - Research Challenge)",
    date: "Wednesday, February 12th, 2025",
    time: "3:00 PM - 5:00 PM",
    venue: "Lab 311 (Lab 312 if additional space is needed)",
    objective: "To develop research and analytical skills by decoding hidden information within technical research papers.",
    structure: [
      "Introduction to the Hunt: Participants receive research papers with riddles.",
      "Clue-Based Challenges: Solve technical problems from research papers.",
      "Final Clue Challenge: First team to unlock the final answer wins."
    ],
    criteria: ["Accuracy of decoded information", "Speed of solving challenges", "Understanding of technical concepts"],
    requirements: ["Research papers and hidden clue sheets", "Evaluation forms for scoring teams", "Volunteers for monitoring progress"]
  }
];
console.log(events)

const App = () => {
  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">📅 Upcoming Events</h1>
      <div className="max-w-5xl mx-auto">
        
        {events.map((event, index) => (
           
          <Card key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default App;
