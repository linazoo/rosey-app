import React from "react";
import { styled, useTheme } from "@mui/material/styles";

import { Box, Checkbox, Typography } from "@mui/material";

type Props = {};

const Home = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const theme = useTheme();

  return (
    <div>
      {/* <Checkbox defaultChecked /> */}
      <Box>
        <Typography variant="h1">hey</Typography>
      </Box>
    </div>
  );
};

export default Home;
