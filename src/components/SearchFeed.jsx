import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
/* components */
import { fetchFromAPI } from "../util/fetchFromAPI";
import { Video } from "./";
import { useParams } from "react-router-dom";
/* function start */
const SearchFeed = () => {
  /* hooks start */
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  /* hooks end */

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Result for:
        <span
          style={{
            color: "#FC1503",
          }}
        >
          {searchTerm}
        </span>Videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
