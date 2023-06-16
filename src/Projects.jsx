import styles from "./styles/project.css";
import programmingChart from "./images/programing_langues_blue.png";
import Project from "./Components/Project.jsx";

function ProjectPage() {
  let names = [
    "Old Faithful Fountains",
    "Bountiful Foods",
    "Chamber of Commerce",
    "Meal Planner",
    "Memorization Helper",
    "Gauntlet Game",
    "Youtube Downloader",
    "Wordle Game",
  ];
  let urls = [
    "https://github.com/jonasnunn/old_faithful",
    "https://github.com/jonasnunn/wdd230/tree/main/bountiful",
    "https://github.com/jonasnunn/wdd230/tree/main/chamber",
    "https://github.com/jonasnunn/recipe-manager",
    "https://github.com/jonasnunn/memorizer",
    "https://github.com/jonasnunn/TheGauntlet",
    "https://github.com/jonasnunn/youtube_downloader",
    "https://github.com/jonasnunn/wordle",
  ];
  let descriptions = [
    "I built this website for a small company to improve their online presence, and give consumers knowledge of the company.",
    "I created this to demonstrate my skill with HTML, CSS, and JavaScript.",
    "This is a mock chamber of commerce site that I created to build my web development skills.",
    "This application can be used to plan out a weeks worth of meals. It can save recipes and then place them into a calender.",
    "This project helps you memorize a body of text by breaking it down into words and then hiding them a couple at a time.",
    "This is a game where you have to stay alive in the gauntlet for as long as possible.",
    "Allows you to download youtube videos to your device in a variety of formats using the pyTube library and tkinter.",
    "A guess the word game, based off of the popular wordle game.",
  ];
  let projects = [names, urls, descriptions];

  return (
    <>
      <main className={styles.main}>
        <img src={programmingChart} alt="Languages Chart" id="langChart" />
        <h1>Projects: </h1>
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
        <h2>Python</h2>
        <Project
          name={projects[0][6]}
          url={projects[1][6]}
          description={projects[2][6]}
        />
        <Project
          name={projects[0][7]}
          url={projects[1][7]}
          description={projects[2][7]}
        />
      </main>
    </>
  );
}

export default ProjectPage;
