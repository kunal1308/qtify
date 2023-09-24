import React from "react";
import styles from "./card.module.css";
import { Chip, Tooltip} from "@mui/material";

const card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
         // eslint-disable-next-line
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                <Chip className={styles.chip} label={`${follows} Follows`} size="small" />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }
      case "song": {
        const {image, likes, title} =data;

        return (
          <>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
           <Chip className={styles.chip} label={`${likes} Likes`} size="small" />
                </div>
              </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default card;
