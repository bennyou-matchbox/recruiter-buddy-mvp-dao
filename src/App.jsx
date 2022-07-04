var image_Name = require("./images/recruiter_buddy_logo_yellow.PNG");
const App = () => {
  return (
    <div className="landing">
      <img className="logo" alt = "recruiterBuddy_ Logo" src = {image_Name}></img>
      <h1>Welcome to _recruiterBuddyDAO</h1>
    </div>
  );
};

export default App;
