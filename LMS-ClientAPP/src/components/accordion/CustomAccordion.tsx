import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CustomAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className=" flex flex-row justify-between w-full">
          <p className=" font-bold">Content Title</p>
        </div>
        <p className=" font-light">Date</p>
      </AccordionSummary>
      <AccordionDetails>
        <div className=" font-light">Content Description</div>
        <a href="#" className=" text-blue-700">
          Link
        </a>
      </AccordionDetails>
    </Accordion>
  );
};
