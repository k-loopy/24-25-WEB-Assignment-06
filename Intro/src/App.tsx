import React from "react";
import Introduce from "./Introduce";
import styles from "./App.module.less";

const App: React.FC = () => {
  const favoriteSongs = [
    { song: "Love Song", year: "2024" },
    { song: "LADY", year: "2024" },
    { song: "yours", year: "2023" },
  ];

  return (
    <div className={styles.container}>
      {favoriteSongs.map((data, index) => (
        <Introduce key={index} song={data.song} year={data.year} />
      ))}
    </div>
  );
};

export default App;
