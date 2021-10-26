import React, { useState, useContext, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { theme } from '../../../theme';

import { LightingContext } from '../../../context/lighting.context';
import Button1 from '../../../components/buttons/button-1.component';
import SelectFilterByStatus from '../../select-filterByStatus/selectFilterByStatus.component';

const AppBarStyled = styled(AppBar)({
   position: 'static',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: 70,
   marginTop: 40,
   backgroundColor: 'transparent',
   
   // paddingLeft: 20,
   // border: '1px solid pink',
   boxShadow: 'none'
   // borderTopRightRadius: 25,
   // borderBottomRightRadius: 25,

});


const ToolBarStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '50%',
   // height: '100vh',
   paddingLeft: 0,
   // border: '1px solid blue',
   // boxShadow: 'none'
   // disableGutters: true,
});

const Heading = styled(Typography)({
   ...theme.typography.h1,
});
const SubHeading = styled(Typography)({
   ...theme.typography.body1,
});

export default function NavbarHorizontalMain({handleMenuSelect}) {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(
      lightingContext.lightingState.bg_lighting === 'light' ? 
         theme.palette.common.dark_1 :
         theme.palette.common.light_bg
   );

   useEffect(() => {
      setLightingState(
         lightingContext.lightingState.bg_lighting === 'light' ? 
            theme.palette.common.dark_1 :
            theme.palette.common.light_bg);
   }, [lightingContext.lightingState]);


   const buttonClickHandler = () => {
      console.log('button1 clicked')
   }
   // console.log('NavbarHorizontalMain lightingState:',lightingState)
   return (      
      <AppBarStyled>
         <ToolBarStyled>
            <div style={{color: lightingState}}>
               <Heading>Invoices</Heading>
               <SubHeading>No invoices</SubHeading>
            </div>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '42%',
                  // border: '1px solid green'
               }}>
               <SelectFilterByStatus handleMenuSelect={handleMenuSelect}/>
               <Button1 clickHandler={buttonClickHandler} />
            </div>
            
            
                        
         </ToolBarStyled>    
      </AppBarStyled>
      
   );
}
