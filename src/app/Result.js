import {
  IconButton,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";

const getTheme = (variant) => {
  switch (variant) {
    case "text":
      return {
        bgcolor: "primary.main",
        color: "white",
        alignSelf: "start",
        backgroundColor: "primary.light",
      };
    case "voice":
      return {
        bgcolor: "secondary.main",
        color: "white",
        alignSelf: "end",
        backgroundColor: "secondary.light",
      };
    default:
      return {
        bgcolor: "error.main",
        color: "white",
        alignSelf: "center",
        backgroundColor: "error.light",
      };
  }
};

const Result = ({ result, variant = "text" }) => {
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

  const theme = getTheme(variant);

  return (
    <Paper
      sx={{
        p: 3,
        mt: 8,
        bgcolor: theme.bgcolor,
        color: "white",
        width: "80vw",
        alignSelf: theme.alignSelf,
      }}
    >
      <Typography variant="h4">{result}</Typography>
      <Stack direction="row-reverse">
        {loading ? (
          <CircularProgress sx={{ color: "white" }} />
        ) : (
          <IconButton
            color={theme.color}
            sx={{
              backgroundColor: theme.backgroundColor,
              "&:hover": {
                backgroundColor: theme.backgroundColor,
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
