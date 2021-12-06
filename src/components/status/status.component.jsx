import React from 'react';

import { Container, Box } from '@mui/material';
import { styled } from '@mui/system';

import { theme } from '../../theme';


const ContainerStatusStyled = styled(Container)({
   ...theme.typography.h3,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontWeight: 700,
   minWidth: 70,
   // width: 'auto',
   // minHeight: '3.1em',
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
   console.log('Status.status:',status,width,height)
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
            color: theme.palette.common.invoice_draft, 
            backgroundColor: theme.palette.common.invoice_draft_light
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
               // margin: 0
            }} />
            {status.charAt(0).toUpperCase()+status.slice(1)}
      </ContainerStatusStyled>
   );
}

export default Status;