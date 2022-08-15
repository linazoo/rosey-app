import React from "react";
import {
  Button,
  Stack,
  List,
  ListItemText,
  ListItemButton,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Detail from "./Detail.js";

const Categories = () => {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleClick = () => {
    setList([...list, value]);
    setValue("");
  };

  const removeItem = (item) => {
    const newList = list.filter((element) => element !== item);
    setList(newList);
  };

  return (
    <div className="App">
      <Typography variant="h2" sx={{ m: { lg: "40px", xs: "30px" } }}>
        My House
      </Typography>
      <Box>
        <Stack alignItems="left" mt="37px" justifyContent="center" p="20px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              mb: { lg: "50px", xs: "20px" },
            }}
            id="standard-basic"
            label="new list item"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            variant="contained"
            sx={{
              width: { lg: "173px", xs: "100px" },
              height: "56px",
              fontSize: { lg: "20px", xs: "14px" },
              mb: { lg: "50px" },
            }}
            onClick={handleClick}
          >
            +
          </Button>

          <>
            <List>
              {list.map((item) => (
                <ListItemButton to={`/detail`}>
                  <ListItemText primary={item} />
                  <RemoveCircleIcon onClick={() => removeItem(item)} />
                </ListItemButton>
              ))}
            </List>
          </>
        </Stack>
      </Box>
    </div>
  );
};

export default Categories;
