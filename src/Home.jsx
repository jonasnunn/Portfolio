//This will be the  home page of the site.

import styles from "./styles/home.css";
import headshot from "./images/JonasNunn_optimized.jpg";
import bubbleChart from "./images/bubble_chart.png";

function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <img src={headshot} alt="Headshot" id="headshot"/>
        <img src={bubbleChart} id="bubbleChart" />
        <a href="projects.html"><button id="projectButton">Projects</button></a>
        <a href=""><button id="aboutButton">About Me</button></a>
      </main>
    </>
  );
}

export default HomePage;
