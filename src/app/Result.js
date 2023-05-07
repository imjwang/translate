import {
  IconButton,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";

const Result = ({ result }) => {
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = async () => {
      setLoading(true);
      const res = await fetch(`/api/voice?text=${result}`, {
        method: "POST",
      });

      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const tempAudio = new Audio(audioUrl);
      setAudio(tempAudio);
      tempAudio.play();
      setLoading(false);
    };
    t();
  }, [result]);

  const handlePlay = () => {
    if (audio !== null) {
      audio.play();
    }
  };
  return (
    <Paper
      sx={{
        p: 3,
        mt: 8,
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Typography variant="h4">{result}</Typography>
      <Stack direction="row-reverse">
        {loading ? (
          <CircularProgress sx={{ color: "white" }} />
        ) : (
          <IconButton
            color="secondary"
            sx={{
              backgroundColor: "secondary.light",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
            onClick={handlePlay}
          >
            <PlayArrowIcon sx={{ fontSize: "2rem", color: "white" }} />
          </IconButton>
        )}
      </Stack>
    </Paper>
  );
};
export default Result;
