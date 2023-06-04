//This will be the  home page of the site.

import styles from "./styles/home.css";
import headshot from './images/JonasNunn_optimized.jpg';

function HomePage () {
    return (
        <>
        <main className={styles.main}>
        <h1>Jonas Nunn</h1>
        <h2>I am a developer</h2>
        <img src={headshot} alt="Headshot"/>
        </main>
        <h1>Projects: </h1>
        </>
    );
}

export default HomePage;