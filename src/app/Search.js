import { debounce } from "lodash";
import {
  TextField,
  Card,
  CardActions,
  Stack,
  CircularProgress,
} from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { useState, useEffect, useCallback } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const callApi = useCallback(
    debounce(async (value) => {
      // Call your API here    setLoading(true);
      setLoading(true);
      console.log(`API call with: ${value}`);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    }, 3000),
    []
  );

  useEffect(() => {
    // Call the debounced function whenever value changes
    if (text.length >= 3) {
      callApi(text);
    }
  }, [text]);
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
            <GTranslateIcon color="primary" fontSize="large" />
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Search;
