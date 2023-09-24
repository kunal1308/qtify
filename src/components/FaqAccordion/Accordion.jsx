import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Accordion.module.css";
import { ReactComponent as UpArrowIcon } from "../../assets/UpArrowIcon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/DownArrowIcon.svg";

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState("panel2");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.accordionWrapper}>
      <h2>FAQs</h2>
      <div className={styles.accordionBody}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ backgroundColor: "#121212" }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className={styles.header}>
              <Typography sx={{ fontWeight: 600 }}>
                Is QTify free to use?
              </Typography>
              <UpArrowIcon />
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "white" }}>
            <Typography sx={{ fontWeight: 600 }}>
              Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordionBody}>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ backgroundColor: "#121212" }}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <div className={styles.header}>
              <Typography sx={{ fontWeight: 600 }}>
                Can I download and listen to songs offline?
              </Typography>
              <DownArrowIcon />
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "white" }}>
            <Typography sx={{ fontWeight: 600 }}>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion