import {
  IconButton,
  Modal,
  Typography,
  Box,
  Card,
  LinearProgress,
  Stack,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import StopIcon from "@mui/icons-material/Stop";
import { useState } from "react";

const Mic = () => {
  const [modal, setModal] = useState(false);

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
            width: "80%",
            maxWidth: "400px",
            textAlign: "center",
            p: 2,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
          >
            <CloseIcon onClick={toggleModal} />
          </IconButton>
          <Stack spacing={2}>
            <Typography variant="body1">Listening...</Typography>
            <LinearProgress />
          </Stack>
          <IconButton
            sx={{ mt: 2 }}
            onClick={() => console.log("stop recording")}
          >
            <StopIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Card>
      </Modal>
      <IconButton
        onClick={toggleModal}
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "primary.main",
        }}
      >
        <MicIcon sx={{ fontSize: "5rem", color: "white" }} />
      </IconButton>
    </>
  );
};
export default Mic;
