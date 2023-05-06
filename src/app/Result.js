import { IconButton, Paper, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Result = ({ result }) => {
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
        <IconButton color="secondary">
          <PlayArrowIcon sx={{ fontSize: "3rem", color: "white" }} />
        </IconButton>
      </Stack>
    </Paper>
  );
};
export default Result;
