import React from 'react'

// importing vidio 
import v1 from "../vidio/v1.mp4";
import v2 from "../vidio/v2.mp4";
import v3 from "../vidio/v3.mp4";
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import {register} from "swiper/element/bundle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';

register();

const vidioPage = [
  {id:1, vidio:v1},
  {id:2, vidio:v2},
  {id:3, vidio:v3},
]

export default function VidioPage() {
  return (
    <Container>
       <Grid container>
          {vidioPage.map((vidio) => (
            <Grid item key={vidio.id} xs={12} md={6} lg={4}
            >
              <video  width="350" height="350" controls >
              <source  src={vidio.vidio} type="video/mp4"/>
              </video>
            </Grid>
            ))}
    </Grid>
    </Container>
  )
}
