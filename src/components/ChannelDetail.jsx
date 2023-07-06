import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Video, ChannelCard } from "./";
import { fetchFromAPI } from "../util/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos,setVideos]=useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data) =>
      setchannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>
    setVideos(data?.items)
    );
  }, [id]);

  return (
   <Box minHeight={"95vh"} alignItems={'center'}>
<Box>
  <div style={
    {
      background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      zIndex:'10',height:'300px'
    }
  } 
  >

  </div>

  <Box 
 
  display="flex"
          justifyContent="center"  // Center the ChannelCard horizontally
          alignItems="center" 
  >
  <ChannelCard channelDetail={channelDetail} marginTop="-93px"  />
</Box>
</Box>
<Box display={'flex'} p={'2'}>
<Box sx={{mr:{sm:'100px'}}} /> 
<Video videos={videos}/>

</Box>
   </Box>
  );
};

export default ChannelDetail;
