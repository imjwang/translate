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

const Search = ({ setResult }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("disabled");

  const callApi = useCallback(
    debounce(async (value) => {
      setLoading(true);
      const res = await fetch(`/api/hello?data=${value}`, {
        method: "POST",
      });
      const json = await res.json();
      setResult(json[0]?.translation_text);
      setLoading(false);
      setColor("disabled");
    }, 3000),
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
        placeholder="你好"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        multiline
        variant="outlined"
        fullWidth
        color="secondary"
        maxRows={10}
        minRows={4}
      />
      <CardActions>
        <Stack sx={{ width: "100%", height: "7vh" }} direction={"row-reverse"}>
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
