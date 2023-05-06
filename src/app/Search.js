import { debounce, set } from "lodash";
import {
  TextField,
  Card,
  CardActions,
  Stack,
  CircularProgress,
} from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
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
    <Card sx={{ p: 2 }}>
      <TextField
        id="Type"
        label="在此输入"
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
      <CardActions>
        <Stack sx={{ width: "100%", height: "5vh" }} direction={"row-reverse"}>
          {loading ? (
            <CircularProgress size={30} color="primary" />
          ) : (
            <GTranslateIcon color={color} fontSize="large" />
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Search;
