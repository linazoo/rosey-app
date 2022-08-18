import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Categories from "./Categories";

import { Box, Checkbox, Typography } from "@mui/material";

type Props = {};

const Home = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const theme = useTheme();

  return (
    <React.Fragment>
      <Categories />
    </React.Fragment>
  );
};

export default Home;
