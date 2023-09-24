import React from "react";
import styles from "./Section.module.css";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  title,
  data,
  type,
  filteredData=null,
  filteredDataValue = [],
  value = 0,
  handleChange = null,
}) => {
  const [carouselToggle, setCarouselToggle] = useState(false);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {type === "song" ? (
            <>{null}</>
          ) : !carouselToggle ? (
            "Show All"
          ) : (
            "Collapse All"
          )}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {!data.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredDataValue.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValue}
              componentRender={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
