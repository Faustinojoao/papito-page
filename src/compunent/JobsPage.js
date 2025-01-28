import { Container, Grid } from '@mui/material'
import React from 'react'

import papitoProfile from "../image/papito profilr.jpg";
import mzi from "../image/mzinhate.jpeg";
import mzi1 from "../image/Mzinhate1.jpeg";
import mzi2 from "../image/Mzinhate2.jpeg";
import mzi3 from "../image/Mzinhate3.jpeg";
import mzi4 from "../image/Mzinhate4.jpeg";
import mzi5 from "../image/Mzinhate5.jpeg";
import north from "../image/North.jpeg";
import Mayville from "../image/Mayville.jpeg";
import lindelane from "../image/lindelane.jpeg";
import Westville from "../image/Westville.jpeg";
import Mantiocom from "../image/Mantiocom.jpeg";
import Mantiocom1 from "../image/Mantiocom1.jpeg";


const pictureClient =[
  {id:1, pictureId:1, picture:mzi},
  {id:2, pictureId:1, picture:mzi1},
  {id:3, pictureId:1, picture:mzi2},
  {id:4, pictureId:1, picture:mzi3},
  {id:5, pictureId:1, picture:mzi4},
  {id:6, pictureId:1, picture:mzi5},
  {id:7, pictureId:1, picture:north},
  {id:8, pictureId:1, picture:Mayville},
  {id:9, pictureId:1, picture:lindelane},
  {id:10, pictureId:1, picture:Westville},
  {id:11, pictureId:1, picture:Mantiocom},
  {id:12, pictureId:1, picture:Mantiocom1}
]

export default function JobsPage() {
  return (
    <>
    <h2><strong style={{color:"#1976d2"}}>work done for clients</strong></h2>
    <Container>
       
       <Grid container>
          {pictureClient.map((image) => (
            <Grid item key={image.id} xs={12} md={6} lg={4}
            style={{ marginTop:"100px",
              borderRadius:"10px"
            }}
            >
             <img src={image.picture} 
                alt='image not avaleble'
                style={{width:"380px", height:"300px"}}/>
            </Grid>
            ))}
    </Grid>
    </Container>
    </>
  )
}
