import Home from "./Home.jsx";
import Project from "./Components/Project.jsx";

function App() {
  return (
    <>
      <Home></Home>
      <Project
        name="Old Faithful Fountains"
        url="https://github.com/jonasnunn/old_faithful"
        description="I built this website for a small company to improve their online presence, and give consumers knowledge of the company."
      />
    </>
  );
}

export default App;
