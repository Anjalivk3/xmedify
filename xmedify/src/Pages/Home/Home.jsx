import Blogs from "../../Components/Sections/Blogs/Blogs";
import { Box, Grid } from "@mui/material";
import OurFamilies from "../../Components/Sections/OurFamilies/OurFamilies";
import PatientCaring from "../../Components/Sections/PatientCaring/PatientCaring";
import Specialists from "../../Components/Sections/Specialists/Specialists";
import Specialization from "../../Components/Sections/Specialization/Specialization";
import FAQs from "../../Components/Sections/FAQs/FAQs";
import Offers from "../../Components/Sections/Offers/Offers";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import Navbar from "../../Components/NavBar/NavBar";

import React from 'react'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroSlider />
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
      
    </Box>
  )
}

export default Home