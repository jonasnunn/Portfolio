import styles from "../styles/home.css";
import PropTypes from 'prop-types';
// let projectName = "Old Faithful Fountains";
// const projectUrl = "https://github.com/jonasnunn/old_faithful";
// const projectDescription = "I built this website for a small company to improve their online presence, and give consumers knowledge of the company.";

const Project = (props) => {
  const { name, url, description} = props;

  return (
      <div className={styles.main}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Repository:
          <a href={url} target="_blank" rel="noreferrer">
            {" "}
            {url}
          </a>
        </p>
      </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;