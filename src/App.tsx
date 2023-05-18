import * as React from 'react';

import {Box, ThemeProvider, Typography} from "@mui/material"
import {Header} from "./components/Header"
import {Layout} from "./components/Layout"
import { appTheme } from './config/theme';
import {Routes, Route, Link} from "react-router-dom"
import { CategoryList } from './features/category/ListCategory';
import { CreateCategory } from './features/category/CreateCategory';
import { CategoryEdit } from './features/category/EditCategory';

function App() {
return (
  <ThemeProvider theme={appTheme}> 
    <Box 
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Header />
      <Layout>
        <h1> Welcome to React Router! </h1>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<CreateCategory />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />

          <Route path="*" element={
            <Box sx={{ color: "white" }}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h2">Page not found</Typography>
            </Box>
          }/>
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>
);
}

export default App;
