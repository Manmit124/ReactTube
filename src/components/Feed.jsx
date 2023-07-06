import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
/* components */
import { fetchFromAPI } from "../util/fetchFromAPI";
import { Sidebar, Video } from "./";
/* function start */
const Feed = () => {
  /* hooks start */
  const [selectedCategory, setSelectedCatogory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
/* hooks end */

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCatogory={setSelectedCatogory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 jsm module
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}
          <span
            style={{
              color: "#FC1503",
            }}
          >
            Videos
          </span>
        </Typography>
        <Video videos={videos} />
      
      </Box>
    </Stack>
  );
};

export default Feed;
