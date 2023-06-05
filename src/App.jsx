import Home from "./Home.jsx";
import Project from "./Components/Project.jsx";

function App() {
  let names = ["Old Faithful Fountains"];
  let urls = ["https://github.com/jonasnunn/old_faithful"];
  let descriptions = ["I built this website for a small company to improve their online presence, and give consumers knowledge of the company."];
  let projects = [names, urls, descriptions];
  
  return (
    <>
      <Home></Home>
      <Project
        name = {projects[0][0]}
        url = {projects[1][0]}
        description = {projects[2][0]}
      />
    </>
  );
}

export default App;
