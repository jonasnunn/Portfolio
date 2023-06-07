import Home from "./Home.jsx";
import Project from "./Components/Project.jsx";

function App() {
  let names = [
    "Old Faithful Fountains",
    "Bountiful Foods",
    "Chamber of Commerce",
    "Task Manager",
    "Meal Planner",
    "Gauntlet Game",
    "Moon Lander",
  ];
  let urls = [
    "https://github.com/jonasnunn/old_faithful",
    "https://github.com/jonasnunn/wdd230/tree/main/bountiful",
    "https://github.com/jonasnunn/wdd230/tree/main/chamber",
    "N/A",
    "N/A",
    "N/A",
    "N/A",
  ];
  let descriptions = [
    "I built this website for a small company to improve their online presence, and give consumers knowledge of the company.",
    "I created this to demonstrate mt skill with HTML, CSS, and JavaScript.",
    "This is a mock chamber of commerce site that I created to build my web development skills.",
    "This project keeps track of different tasks and helps organize them.",
    "This application can be used to plan out a weeks worth of meals. It can save recipes and then place them into a calender.",
    "This is a game where you have to stay alive in the gauntlet for as long as possible.",
    "The simulator recreates the Apollo 11 moon landing.",
  ];
  let projects = [names, urls, descriptions];

  return (
    <>
      <Home></Home>
      <h2>Vanilla Web</h2>
      <Project
        name={projects[0][0]}
        url={projects[1][0]}
        description={projects[2][0]}
      />
      <Project
        name={projects[0][1]}
        url={projects[1][1]}
        description={projects[2][1]}
      />
      <Project
        name={projects[0][2]}
        url={projects[1][2]}
        description={projects[2][2]}
      />
      <h2>C#</h2>
      <Project
        name={projects[0][3]}
        url={projects[1][3]}
        description={projects[2][3]}
      />
      <Project
        name={projects[0][4]}
        url={projects[1][4]}
        description={projects[2][4]}
      />
      <h2>C++</h2>
      <Project
        name={projects[0][5]}
        url={projects[1][5]}
        description={projects[2][5]}
      />
      <Project
        name={projects[0][6]}
        url={projects[1][6]}
        description={projects[2][6]}
      />
    </>
  );
}

export default App;
