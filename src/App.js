import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.perspective} />
      <div className={styles.isolated}>
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
