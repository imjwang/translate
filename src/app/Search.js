import {
  TextField,
  Card,
  CardActions,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const Search = () => {
  return (
    <Card sx={{ p: 2 }}>
      <TextField
        id="Type"
        label="在此输入"
        placeholder="你好"
        multiline
        variant="outlined"
        fullWidth
        color="secondary"
        maxRows={10}
        minRows={4}
      />
      <CardActions>
        <Stack sx={{ width: "100%" }} direction={"row-reverse"}>
          <GTranslateIcon color="primary" fontSize="large" />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Search;
