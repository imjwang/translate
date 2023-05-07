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
  Modal,
  Button,
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
          <Typography variant="h4">k2en</Typography>
        </Toolbar>
      </AppBar>
      <Stack spacing={4} alignItems="center" sx={{ m: 4 }} direction="column">
        <Mic />
        <Card>
          <Search setResult={setResult} />
        </Card>
      </Stack>
      <Stack sx={{ m: 4 }} direction="column-reverse">
        {result.length > 0 && <Result result={result} />}
        <Result result="Yeah, totally." variant="other" />
        <Result result="It's a beautiful day today!" />
      </Stack>
    </>
  );
}
