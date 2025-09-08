import Blogs from "../../Components/Sections/Blogs/Blogs";
import { Box, Grid } from "@mui/material";
import OurFamilies from "../../Components/Sections/OurFamilies/OurFamilies";
import PatientCaring from "../../Components/Sections/PatientCaring/PatientCaring";

import React from 'react'

const Home = () => {
  return (
    <Box>
      <PatientCaring />
      <Blogs />
      <OurFamilies />
    </Box>
  )
}

export default Home