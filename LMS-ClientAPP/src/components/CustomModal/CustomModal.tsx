import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ICustomModalProps {
  onCloseFn: () => void;
  open: boolean;
  children: React.ReactNode;
}
export const CustomModal = ({
  onCloseFn,
  open,
  children,
}: ICustomModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseFn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
