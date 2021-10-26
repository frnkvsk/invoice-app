import React, { useState, useContext } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';

import { theme } from '../../../theme';
import user1 from '../../../assets/image-avatar.jpg';
import { ReactComponent as IconMoon } from '../../../assets/icon-moon.svg';
import { ReactComponent as IconSun } from '../../../assets/icon-sun.svg';
import LogoStyled from './logo-styled.component';
import { LightingContext } from '../../../context/lighting.context';

const AppBarStyled = styled(AppBar)({
   position: 'fixed',   
   width: 75,
   height: '100vh',
   backgroundColor: theme.palette.common.dark_4,
   left: 0,
   padding: 0,
   borderTopRightRadius: 25,
   borderBottomRightRadius: 25,
});


const ToolBarStyled = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'space-between',
   width: 'auto',
   height: '100vh',
   paddingLeft: 0,
   // border: 'none',
   // backgroundColor: 'transparent'
});

const AvatarWrapper = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   flexDirection: 'column',
   width: '100%',
   height: 80,
   paddingBottom: 10,
   border: 'none',
   // backgroundColor: 'transparent'
});

const IconMoonWrapper = styled(IconMoon)({
   transform: 'scale(0.6)'
});

const IconSunWrapper = styled(IconSun)({
   transform: 'scale(0.6)'
});

const ButtonStyled = styled(Button)({
   width: 20,
   height: 20,
   backgroundColor: 'transparent'
});

export default function Navbar() {
   const lightingContext = useContext(LightingContext);

   const [bg_lighting, set_bg_lighting] = useState(
      lightingContext.lightingState ? lightingContext.lightingState.bg_lighting : 'light'
   );


   const handleClick = () => {
      if(bg_lighting === 'light') {
         set_bg_lighting('dark');
         lightingContext.setLightingState('dark');
      }
      else {
         set_bg_lighting('light');
         lightingContext.setLightingState('light');
      }
   }
   
   return (      
         <AppBarStyled>
            <ToolBarStyled>
               <LogoStyled />
               <AvatarWrapper>                  
                  <ButtonStyled onClick={handleClick}>
                     {  bg_lighting === 'light' ? 
                           <IconSunWrapper />   : 
                           <IconMoonWrapper />
                     }
                  </ButtonStyled>                  
                  <Avatar
                     alt='user 1'
                     src={user1}
                     sx={{ 
                        width: 30,
                        height: 30
                     }} />
               </AvatarWrapper>               
            </ToolBarStyled>        
         </AppBarStyled>
      
   );
}
