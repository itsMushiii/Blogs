import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Blog({ image, subtitle, title, id }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ ml: 1, mr: 1 }}>
      <Card
        style={{
          border: "none",
          boxShadow: "none",
          margin: "0 auto",
        }}>
        {matches ? (
          <img width='330px' height=' 266px' src={image} alt='' />
        ) : (
          <img width='405px' height='266px' src={image} alt='' />
        )}
        <CardContent>
          <Link to={`/blog-details/${id}`} style={{ textDecoration: "none" }}>
            <Typography
              style={{ color: "#1E1B1B" }}
              fontFamily='Manrope'
              fontWeight='700'
              fontSize='32px'
              lineHeight='48px'
              letterSpacing='-3%'>
              {title}
            </Typography>
          </Link>
          <Typography
            style={{ color: "#1E1B1B" }}
            fontFamily='Manrope'
            fontWeight='600'
            fontSize='16px'
            lineHeight='28px'
            variant='body2'>
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Blog;
