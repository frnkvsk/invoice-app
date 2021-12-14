import React, { useContext, useEffect, useState } from 'react';

import { Container, Box } from '@mui/material';
import { styled } from '@mui/system';

import { LightingContext } from '../../context/lighting.context';
import { theme } from '../../theme';


const ContainerStatusStyled = styled(Container)({
   ...theme.typography.h3,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontWeight: 700,
   minWidth: 70,
   borderRadius: 4,
   margin: 0,
   padding: 0,
});

const IconDot = styled(Box)({
   width: '0.5em',
   height: '0.5em',
   borderRadius: 25,
   marginLeft: 0,
   marginRight: '0.5em'   
});


const Status = ({status, width, height}) => {
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);  

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   const statusColor = 
      status === 'paid' ? 
         {
            color: theme.palette.common.invoice_paid, 
            backgroundColor: theme.palette.common.invoice_paid_light
         } : 
      status === 'pending' ? 
         {
            color: theme.palette.common.invoice_pending, 
            backgroundColor: theme.palette.common.invoice_pending_light
         } : 
         {
            ...lightingState.color_3
         };
   
   
   return (
      <ContainerStatusStyled
         style={{
            ...statusColor,
            width: width,
            height: height
         }}>
         
         <IconDot
            style={{
               backgroundColor: statusColor.color, 
               padding: 0,
            }} />
            {status.charAt(0).toUpperCase()+status.slice(1)}
      </ContainerStatusStyled>
   );
}

export default Status;