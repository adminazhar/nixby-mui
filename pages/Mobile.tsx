import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Nav from "../src/components/header/nav/Nav";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Nav></Nav>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Latest Mobiles
              </Typography>
              <Typography variant="h5" component="div">
                Mobile Brands
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275, mt:2 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                Hello world 123 hello
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={9}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sap
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
