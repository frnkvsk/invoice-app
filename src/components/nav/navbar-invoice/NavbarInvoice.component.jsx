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
   borderRadius: 10,
   boxShadow: 'none',   
   // border: '1px solid yellow'
});

const ToolBarStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%',
   height: '100%',
   borderRadius: 5,
   
});

const SubHeading = styled(Typography)({
   ...theme.typography.body1,
});

export default function NavbarInvoice({status, handleMenuSelect}) {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   const buttonClickHandler = () => {
      // console.log('NavbarInvoice button1 clickeddd')
      // console.log('NavbarInvoice lightingState',lightingState)
   }
   
   return (      
      <AppBarStyled style={{...lightingState.color_4}}>
         <ToolBarStyled 
            style={{
               ...lightingState.color_7,
               boxShadow: `0 4px 4px -4px ${theme.palette.common.dark_1}30`
            }}>
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
