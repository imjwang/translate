import { IconButton, Modal, Typography, Box, Card } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";

const Mic = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    console.log("hi");
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal open={modal} onClose={toggleModal}>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
            width: "50vw",
            height: "30vh",
            textAlign: "center",
          }}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis
            ultricies
          </Typography>
        </Card>
      </Modal>
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "primary.main",
          borderRadius: "50%",
        }}
      >
        <IconButton onClick={toggleModal}>
          <MicIcon sx={{ fontSize: "3rem", color: "white" }} />
        </IconButton>
      </Box>
    </>
  );
};
export default Mic;
