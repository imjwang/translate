"use client";
import Image from "next/image";
import {
  Typography,
  CssBaseline,
  Paper,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Paper sx={{ p: 3, mt: 8 }}>
          <Typography variant="h4">Translate</Typography>
        </Paper>
      </Container>
      {/* TODO make the box circular*/}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "primary.main",
          borderRadius: "50%",
        }}
      >
        <IconButton>
          <MicIcon sx={{ fontSize: "3rem", color: "white" }} />
        </IconButton>
      </Box>
    </>
  );
}
