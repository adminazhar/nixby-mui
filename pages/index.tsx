import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Nav from '../src/components/header/nav/Nav';
import Toolbar from '@mui/material/Toolbar';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Nav></Nav>
      <Toolbar />
      <Box component="main" sx={{  }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore 
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
