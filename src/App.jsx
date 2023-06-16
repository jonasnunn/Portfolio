import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import { useState } from "react";

function App() {
  const [currentPage] = useState('projects');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      // Add cases for other pages
      default:
        return null;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
