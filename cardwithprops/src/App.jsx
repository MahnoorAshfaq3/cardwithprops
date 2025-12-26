import ProfileCard from "./card";
import "./App.css";
import IMG from ".//assets/IMG-20241001-WA0010.jpg";

function App() {
  return (
    <div className="app">
      <ProfileCard
      
        image={IMG}
        name="Mahnoor Ashfaq"
        location="PAKISTAN"
        bio="User interface designer and front-end developer"
        skills={[
          "UI / UX",
          "Front End Development",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          
        ]}
      />
    </div>
  );
}

export default App;
