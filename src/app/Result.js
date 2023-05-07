import {
  IconButton,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";

const Result = ({ result, variant = "user" }) => {
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
        bgcolor: variant === "user" ? "primary.main" : "secondary.main",
        color: "white",
        width: "80vw",
        alignSelf: variant === "user" ? "start" : "end",
      }}
    >
      <Typography variant="h4">{result}</Typography>
      <Stack direction="row-reverse">
        {loading ? (
          <CircularProgress sx={{ color: "white" }} />
        ) : (
          <IconButton
            color={variant === "user" ? "primary" : "secondary"}
            sx={{
              backgroundColor:
                variant === "user" ? "primary.light" : "secondary.light",
              "&:hover": {
                backgroundColor:
                  variant === "user" ? "primary.main" : "secondary.main",
              },
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
