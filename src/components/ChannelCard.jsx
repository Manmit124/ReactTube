import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../util/constants'

const ChannelCard = ({channelDetail,marginTop}) => (

  <Box sx={{
    display: 'flex',
      justifyContent: 'center',
      marginTop: marginTop,
   
  }}>

   <Box 
   sx={{
    boxShadow:'none',
    borderRadius:'20px',
    display:'flex',
    alignItems:'center'
    ,width:{xs:'90%' ,md:'272px'},
    height:'326px'
    ,margin:'auto',
    justifyContent:'center',
    marginRight:{
    xs:'10px',sm:'45px'
   }
   }}
   >
   <Link to={`/channel/${channelDetail?.id?.channelId}`}>
<CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
<CardMedia  
  image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
  alt={channelDetail?.snippet?.title}
  sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
/>
<Typography variant='h6'>
{channelDetail?.snippet?.title}
<CheckCircle sx={{fontSize:"14px",color:"gray",ml:"5px"}}/>

</Typography>

</CardContent>
</Link>
   </Box>
   </Box>
  );


export default ChannelCard
