import * as React from 'react';

import {Box, ThemeProvider, Typography} from "@mui/material"
import {Header} from "./components/Header"
import {Layout} from "./components/Layout"
import { appTheme } from './config/theme';


function App() {
return (
  <ThemeProvider theme={appTheme}> 
    <Box 
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Header />
      <Layout>
        <Typography variant= "h1" component="h1">
          News
        </Typography>
      </Layout>
    </Box>
  </ThemeProvider>
);
}

export default App;
