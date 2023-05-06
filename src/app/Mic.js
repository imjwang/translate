import { Box, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

const Mic = () => {
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "primary.main",
        borderRadius: "50%",
      }}
    >
      <IconButton onClick={handleClick}>
        <MicIcon sx={{ fontSize: "3rem", color: "white" }} />
      </IconButton>
    </Box>
  );
};
export default Mic;
