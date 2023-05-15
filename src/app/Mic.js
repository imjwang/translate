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
import { useState, useEffect } from "react";

const options = {
  mimeType: "audio/webm;codecs=opus", // Opus codec for WebM container
  audioBitsPerSecond: 256000, // Set bitrate to 128 kbps
};

const constraints = {
  audio: true,
};

const Mic = () => {
  const [modal, setModal] = useState(false);
  const [audio, setAudio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tempUrl, setTempUrl] = useState("");

  let stream = null;
  let mediaRecorder = null;

  const getMedia = async (constraints) => {
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setAudio([...audio, e.data]);
        }
      };
      mediaRecorder.start();
      setLoading(false);

      const audioTracks = stream.getAudioTracks();
      console.log("Using audio device: " + audioTracks[0].label);
      stream.oninactive = function () {
        console.log("Stream inactive");
      };
    } catch (e) {
      console.error("Error opening audio input stream: " + e);
    }
  };

  useEffect(() => {
    getMedia(constraints);
  });

  //TODO move the icon outside of Component and give it toggleModal
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleStop = () => {
    mediaRecorder.stop();
    stream.getTracks().forEach((track) => track.stop());
    setModal(false);
    setTempUrl(URL.createObjectURL(new Blob(audio, options)));
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
          {loading || (
            <Stack spacing={2}>
              <Typography variant="body1">Listening...</Typography>
              <LinearProgress />
            </Stack>
          )}
          <IconButton sx={{ mt: 2 }} onClick={handleStop}>
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
      <audio src={tempUrl} controls />
    </>
  );
};
export default Mic;
