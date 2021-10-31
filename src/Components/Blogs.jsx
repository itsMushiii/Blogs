import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogs } from "../Redux/Actions/BlogsActions";

import Blog from "./Blog";

function Blogs() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.BlogReducer.blogs);

  useEffect(() => {
    dispatch(GetBlogs());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ pt: 10 }}>
      <Container>
        <Grid style={{ margin: "0 auto" }} container>
          {posts &&
            posts.map((post) => {
              const { Image, Subtitle, Title, id } = post;
              return (
                <Grid
                  item
                  key={id}
                  style={{ margin: "0 auto" }}
                  lg={4}
                  md={6}
                  sm={12}>
                  <Box sx={{ pt: 3 }}>
                    <Blog
                      image={Image}
                      subtitle={Subtitle}
                      title={Title}
                      id={id}
                    />
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
