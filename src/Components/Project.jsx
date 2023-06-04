import styles from "../styles/project.css";
let projectName = "Old Faithful Fountains";
const projectUrl = "https://github.com/jonasnunn/old_faithful";
const projectDescription =
  "I built this website for a small company to improve their online presence, and give consumers knowledge of the company.";

function Project() {
  return (
    <>
      <div className={styles.main}>
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
        <p>
          Repository:
          <a href={projectUrl} target="_blank" rel="noreferrer">
            {" "}
            {projectUrl}
          </a>
        </p>
      </div>
    </>
  );
}

export default Project;