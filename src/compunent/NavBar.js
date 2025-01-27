import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';

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

// importing vidio 
import v1 from "../vidio/v1.mp4";
import v2 from "../vidio/v2.mp4";
import v3 from "../vidio/v3.mp4";

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
const pages = ['All Jobs', 'This year jobs', 'Recent Jobs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const clientDate = [{id:1, name:"Mzinhate job", pictureId:1, location:"durban", phoneNumber:"+27694605399", profile:mzi5},
                    {id:2, name:"Durban North", pictureId:2, location:"Durban North", phoneNumber:"+27646790035", profile:north},
                    {id:3, name:"Mayville", pictureId:3, location:"Mayville", phoneNumber:"0788938969", profile:Mayville},
                    {id:4, name:"lindelane", pictureId:4, location:"lindelane", phoneNumber:"+27660783070", profile:lindelane},
                    {id:5, name:"Westville", pictureId:5, location:"Westville", phoneNumber:"+27837573122", profile:Westville},
                    {id:6, name:"Mantiocom", pictureId:6, location:"Mantiocom", phoneNumber:"", profile:Mantiocom1}]
const pictureClient =[{id:1, pictureId:1, picture:mzi},
                      {id:2, pictureId:1, picture:mzi1},
                      {id:3, pictureId:1, picture:mzi2},
                      {id:4, pictureId:1, picture:mzi3},
                      {id:5, pictureId:1, picture:mzi4},
                      {id:6, pictureId:1, picture:mzi5}]

                      const style = {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        height:500,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        //p: 4,
                      };

  const vidioPage = [
    {id:1, vidio:v1},
    {id:2, vidio:v2},
    {id:3, vidio:v3},
  ]

function NavBar() {

  const [spacing, setSpacing] = React.useState(2);
  const jsx = `<Grid container spacing={${spacing}}>`;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [picId, setPicId] = React.useState();
  const [picIdOlny, setPicIdOnly] = React.useState();

  function handleClick (pictureId){
    setPicId(pictureId);
    handleOpen();
  }

  function handleClickImage (pictureId){
    setPicIdOnly(pictureId);
  }

  const newPicture = pictureClient.filter(pictureClientNew =>
    pictureClientNew.pictureId === picId
  );

  const newPictureOlny = newPicture.filter(pictureClientNew =>
    pictureClientNew.id === picIdOlny
  );
  

  return (
  <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAPITO CEILING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PAPITO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={papitoProfile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
    <Container>
    
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{width:"80%", height:"200px",
          objectFit:"cover", marginTop:"10px",
          borderRadius:"10px"
        }}
        >
           {pictureClient.map((client) => (
              <SwiperSlide key={client.id}>
                <img src={client.picture} 
                alt='image not avaleble'
                style={{}}/>
              </SwiperSlide>
            ))}   
      </Swiper>
   
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
    <br/>
    <br/>

    <h2><strong style={{color:"white",width:"100%", 
      padding:"10px", background:"#1976d2", borderRadius:"10px"}}>work done for clients</strong></h2>
      <Grid container>
        {clientDate.map((client) => (
          <Grid item key={client.id} xs={12} md={6} lg={4}
          style={{padding:"0px"}}>
            <Paper elevation={10} style={{ margin:"5px", padding:"5px"
            }}
            onClick={() => handleClick(client.pictureId)}
           >
                <div>
                    <h4 >Client Name: <strong style={{color:"#1976d2"}}>{client.name}</strong></h4>
                </div>  
                <div> 
                    <h4 >Client Address: <strong style={{color:"#1976d2"}}>{client.location}</strong></h4>
                </div>      
                <div> 
                    <h4 >Client Phone Number:  <strong style={{color:"#1976d2"}}>{client.phoneNumber}</strong></h4>
                </div>  
               <div> 
                    <img style={{width:"370px", height:"200px", borderRadius:"5px"}} src={client.profile} alt='Image nao disponivel'/>
                </div>
            </Paper>
          </Grid>
        ))}
      </Grid>

        

    </Container>

    <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} style={{borderRadius:"10px"}}>
          <Swiper
           effect={'flip'}
           grabCursor={true}
           pagination={true}
           navigation={true}
           modules={[EffectFlip, Pagination, Navigation]}
            style={{width:"100%", height:"100%",
              objectFit:"cover", borderRadius:"10px"
            }}
            >
           {newPicture.map((client) => (
              <SwiperSlide key={client.id}>
                <img style={{width:"100%", height:"100%", borderRadius:"10px"}} src={client.picture} 
                alt='image not avaleble'
                />
              </SwiperSlide>
            ))}   
        </Swiper>
        </Box>
      </Modal>
    
   
    </>
  );
}
export default NavBar;