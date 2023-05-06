"use client";
import Image from "next/image";
import {
  Typography,
  CssBaseline,
  Paper,
  Stack,
  Card,
  AppBar,
  Toolbar,
} from "@mui/material";
import Mic from "./Mic";
import Search from "./Search";
import { useState } from "react";
import Result from "./Result";

export default function Home() {
  const [result, setResult] = useState("");
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Translate</Typography>
        </Toolbar>
      </AppBar>
      <Stack spacing={4} sx={{ m: 4 }}>
        <Card>
          <Search setResult={setResult} />
        </Card>
        {result.length > 0 && <Result result={result} />}
      </Stack>
      <Mic />
    </>
  );
}
