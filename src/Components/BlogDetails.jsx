import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";
import { SelectedBlog } from "../Redux/Actions/BlogsActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function BlogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.SingleBlogReducer);
  console.log(post);
  useEffect(() => {
    dispatch(SelectedBlog(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      {matches ? (
        <Box sx={{ pt: 10, pb: 10 }}>
          <Container>
            <Grid container>
              <Grid
                style={{ margin: "0 auto" }}
                item
                // lg={8} md={8} sm={12}
              >
                <Box sx={{ pt: 5, pb: 5, margin: "0 auto" }}>
                  <Typography
                    style={{ color: "#939191", display: "inline-block" }}
                    fontFamily='Manrope'
                    // fontWeight='600'
                    //   fontSize='16px'
                    //   lineHeight='28px'
                    variant='body2'>
                    Posted On:
                  </Typography>
                  <Typography
                    style={{
                      paddingLeft: "20px",
                      color: "#939191",
                      display: "inline-block",
                    }}
                    fontFamily='Manrope'
                    // fontWeight='600'
                    // fontSize='16px'
                    // lineHeight='28px'
                    variant='body2'>
                    Views:
                  </Typography>
                  <Typography
                    style={{ color: "#1E1B1B" }}
                    fontFamily='Manrope'
                    // fontWeight='700'
                    // fontSize='48px'
                    // lineHeight='67.2px'
                    letterSpacing='-3%'
                    variant='h3'>
                    {post?.Title}
                  </Typography>

                  <Typography
                    style={{ color: "#1E1B1B" }}
                    fontFamily='Manrope'
                    // fontWeight='600'
                    // fontSize='16px'
                    // lineHeight='28px'
                    variant='body2'>
                    {post?.Subtitle}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item>
                <Box sx={{ margin: "0 auto" }}>
                  <img width='300px' src={post?.Image} alt='' />
                </Box>
              </Grid>
            </Grid>
            <Grid container style={{ paddingTop: "50px" }}>
              <Grid style={{ margin: "0 auto" }} item lg={8}>
                <Typography
                  style={{ color: "#1E1B1B" }}
                  fontFamily='Manrope'
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='28px'
                  variant='body2'>
                  {post?.Article}
                </Typography>
                {/* <img src={post?.Image} alt='' /> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={{ pt: 10, pb: 10 }}>
          <Container>
            <Grid container>
              <Grid style={{ margin: "0 auto" }} item lg={8} md={8} sm={12}>
                <Box sx={{ pt: 5, pb: 5, margin: "0 auto" }}>
                  <Typography
                    style={{ color: "#939191", display: "inline-block" }}
                    fontFamily='Manrope'
                    fontWeight='600'
                    fontSize='16px'
                    lineHeight='28px'
                    variant='body2'>
                    Posted On:
                  </Typography>
                  <Typography
                    style={{
                      paddingLeft: "20px",
                      color: "#939191",
                      display: "inline-block",
                    }}
                    fontFamily='Manrope'
                    fontWeight='600'
                    fontSize='16px'
                    lineHeight='28px'
                    variant='body2'>
                    Views:
                  </Typography>
                  <Typography
                    style={{ color: "#1E1B1B" }}
                    fontFamily='Manrope'
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='67.2px'
                    letterSpacing='-3%'
                    variant='h3'>
                    {post?.Title}
                  </Typography>

                  <Typography
                    style={{ color: "#1E1B1B" }}
                    fontFamily='Manrope'
                    fontWeight='600'
                    fontSize='16px'
                    lineHeight='28px'
                    variant='body2'>
                    {post?.Subtitle}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item>
                <Box sx={{ margin: "0 auto" }}>
                  <img src={post?.Image} alt='' />
                </Box>
              </Grid>
            </Grid>
            <Grid container style={{ paddingTop: "50px" }}>
              <Grid style={{ margin: "0 auto" }} item lg={8}>
                <Typography
                  style={{ color: "#1E1B1B" }}
                  fontFamily='Manrope'
                  fontWeight='600'
                  fontSize='16px'
                  lineHeight='28px'
                  variant='body2'>
                  {post?.Article}
                </Typography>
                {/* <img src={post?.Image} alt='' /> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default BlogDetails;
