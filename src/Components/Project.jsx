import styles from "../styles/home.css";
import PropTypes from 'prop-types';

const Project = (props) => {
  const { name, url, description} = props;

  return (
      <div className={styles.main}>
        <h4>{name}</h4>
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