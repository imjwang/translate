import { debounce } from "lodash";
import {
  TextField,
  Card,
  CardActions,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  AccordionActions,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect, useCallback } from "react";

const translateApi = async (value) => {
  const res = await fetch(`/api/hello?data=${value}`, {
    method: "POST",
  });
  return await res.json();
};

const Search = ({ setResult }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("disabled");

  const callApi = useCallback(
    debounce(async (value) => {
      setLoading(true);
      let res;
      try {
        res = await translateApi(value);
      } catch ({ error }) {
        console.log(error);
        // if (error.contains("loading")) {
        //   setTimeout(async () => {
        //     res = await translateApi(value);
        //   }, 20000);
        // }
      }

      setResult(res[0]?.translation_text ?? "error");

      setLoading(false);
      setColor("disabled");
    }, 2000),
    []
  );

  useEffect(() => {
    // Call the debounced function whenever value changes
    if (text.length >= 3) {
      setColor("primary");
      callApi(text);
    }
    return () => {
      setColor("disabled");
      callApi.cancel();
    };
  }, [text, callApi]);
  return (
    <Accordion>
      <AccordionSummary
        expan
        Accordion
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fontSize: "4rem",
            }}
          />
        }
        sx={{
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        <EditNoteIcon
          sx={{
            fontSize: "2rem",
          }}
        />
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          id="Type"
          label="Translate"
          placeholder="你好..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          multiline
          variant="outlined"
          fullWidth
          color="primary"
          maxRows={10}
          minRows={4}
        />
      </AccordionDetails>
      <AccordionActions>
        <Stack sx={{ width: "100%", height: "5vh" }} direction={"row-reverse"}>
          {loading ? (
            <CircularProgress size={30} color="primary" />
          ) : (
            <TranslateIcon color={color} fontSize="large" />
          )}
        </Stack>
      </AccordionActions>
    </Accordion>
  );
};

export default Search;
