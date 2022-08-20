import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Container,
  Typography,
} from "@mui/material";

const cards = [
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
  {
    smallText: "How to",
    title: "Oven",
    descriptionText: "Clean the Oven",
    extraText: "cleaning",
    buttonText: "steps",
  },
];

const Detail = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: "100px" }}>
      <Typography variant="h1">Kitchen</Typography>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item>
            <Card sx={{ minWidth: 400 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {card.smallText}
                </Typography>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.extraText}
                </Typography>
                <Typography variant="body2">{card.descriptionText} </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{card.buttonText}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Detail;
