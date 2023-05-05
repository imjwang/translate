"use client";
import Image from "next/image";
import { Typography, CssBaseline, Paper, Stack, Card } from "@mui/material";
import Mic from "./Mic";
import Search from "./Search";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Stack spacing={4} sx={{ m: 4 }}>
        <Paper sx={{ p: 3, mt: 8 }}>
          <Typography variant="h4">Translate</Typography>
        </Paper>
        <Card>
          <Search />
        </Card>
      </Stack>
      <Mic />
    </>
  );
}
