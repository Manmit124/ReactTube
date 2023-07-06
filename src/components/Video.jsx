import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard,ChannelCard, Loader } from "./";
const Video = ({ videos,direction}) => {
  
  if(!videos?.length) return <Loader/>
  return (
   
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>

{
  videos.map((item,idx)=>(
    <Box key={idx}>

      {item.id.videoId && <VideoCard video={item}/>}
      {item.id.channelId && <ChannelCard  channelDetail={item}/>}
    </Box>
  ))
}
    </Stack>
  );
};

export default Video;
