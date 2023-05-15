import { Card } from "@mui/material";
import { useRef, useState, useEffect } from "react";

const Audio = ({ audioUrl }) => {
  return (
    <Card>
      <audio src={audioUrl} controls />
    </Card>
  );
};

export default Audio;
