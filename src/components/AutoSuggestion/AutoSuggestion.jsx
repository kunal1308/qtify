import React from "react";
import styles from "./AutoSuggestion.module.css";

const AutoSuggestion = ({ filteredAlbum }) => {
  return (
    <div className={styles.searchDropdown}>
      {filteredAlbum.map((album) => {
        const { title, songs, image, follows } = { ...album };
        return (
          <div className={styles.cardWrapper}>
            <img src={image} alt={title} loading="lazy" />
            <div className={styles.cardInfo}>
              <h5 className={styles.cardTitle}>{title}</h5>
              <p>{songs[0]?.artists.join(", ")}</p>
            </div>
            <p className={styles.cardFollows}>{follows} Follows</p>
          </div>
        );
      })}
    </div>
  );
};

export default AutoSuggestion;
