import React, { useState, useContext, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { theme } from '../../../theme';
import { LightingContext } from '../../../context/lighting.context';
import Status from '../../status/status.component';
import Button2 from '../../buttons/button-2.component';
import Button3 from '../../buttons/button-3.component';
import Button5 from '../../buttons/button-5.component';


const AppBarStyled = styled(AppBar)({
   position: 'static',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: 80,
   backgroundColor: 'transparent',
   boxShadow: 'none',   
});

const ToolBarStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   backgroundColor: theme.palette.common.dark_4,
   width: '100%',
   height: '100%',
   borderRadius: 5,
   boxShadow: `0 4px ${theme.palette.secondary.light}20`
});

const SubHeading = styled(Typography)({
   ...theme.typography.body1,
});

export default function NavbarInvoice({status, handleMenuSelect}) {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({});

   useEffect(() => {
      setLightingState(lightingContext.lightingState)
         // lightingContext.lightingState.bg_lighting === 'light' ? 
         // {
         //    color: theme.palette.common.dark_4,
         //    backgroundColor: '#fff'
         // } :
         // {
         //    color: theme.palette.common.light_bg,
         //    backgroundColor: theme.palette.common.dark_4,

         // })
   }, [lightingContext.lightingState]);

   const buttonClickHandler = () => {
      console.log('NavbarInvoice button1 clickeddd')
      console.log('NavbarInvoice lightingState',lightingState)
   }
   
   return (      
      <AppBarStyled>
         <ToolBarStyled style={lightingState}>
            <div 
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '22%',
                  paddingLeft: 20,
               }}>
               <SubHeading>Status</SubHeading>
               <Status status={status} width={'9rem'} height={'2.7rem'}/>
            </div>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '42%',
                  paddingRight: 20,
               }}>
               
               <Button3>                  
                  Edit
               </Button3>
               <Button5>
                  Delete
               </Button5>
               <Button2 clickHandler={buttonClickHandler}>
                  Mark as Paid
               </Button2>               
            </div>                        
         </ToolBarStyled>    
      </AppBarStyled>      
   );
}
