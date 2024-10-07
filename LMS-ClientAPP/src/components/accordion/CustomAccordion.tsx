import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IAccordionProps {
  title: string;
  createdDate: string;
  contentDescription: string;
  link: string;
  icon?: React.ReactNode;
}

export const CustomAccordion = ({
  title,
  createdDate,
  contentDescription,
  link,
  icon,
}: IAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className=" flex flex-row justify-between w-full">
          <div className=" flex gap-1">
            {icon ? icon : null}
            <p className=" font-bold">{title}</p>
          </div>
        </div>
        <p className=" font-light w-1/3">{createdDate}</p>
      </AccordionSummary>
      <AccordionDetails>
        <div className=" font-light">{contentDescription}</div>
        <a href={link} className=" text-blue-700">
          {link}
        </a>
      </AccordionDetails>
    </Accordion>
  );
};
