import React from 'react';

import { Button, Card, Container, Box } from '@mui/material';
import { styled } from '@mui/system';

import { ReactComponent as IconArrow } from '../../assets/icon-arrow-right.svg';
import { theme } from '../../theme';

const CardStyled = styled(Card)({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   minHeight: 90,
   marginTop: 10,
});
const CardContentStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start',
   // justifyContent: 'center', 
   width: '100%',
   paddingLeft: 10,
   paddingRight: 0, 
   height: '50%',
   // border: '1px solid green'
});
const ContainerIdStyled = styled(Container)({
   ...theme.typography.body2,
   width: '15%',
   // border: '1px solid yellow'
});
const ContainerPaymentDateStyled = styled(Container)({
   ...theme.typography.body2,
   width: '20%',
   // border: '1px solid orange'
});
const ContainerClientNameStyled = styled(Container)({
   ...theme.typography.body2,
   width: '20%',
   // border: '1px solid yellow'
});
const ContainerTotalStyled = styled(Container)({
   ...theme.typography.h3,
   width: '20%',
   // border: '1px solid orange'
});
const ContainerStatusStyled = styled(Container)({
   ...theme.typography.h3,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontWeight: 700,
   minWidth: 75,
   width: '14%',
   minHeight: '3.1em',
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

const ButtonArrow = styled(Button)({
   width: 20,
   margin: 0,
   padding: 20,
});

const InvoiceCard = ({id, paymentDue, clientName, total, status}) => {
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
   // const Dot = 
   //    status === 'paid' ? 
   //       IconDotPaid : 
   //    status === 'pending' ? 
   //       IconDotPending : 
   //       IconDotDraft; 
   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const dateArr = paymentDue.split('-');
   const dueDate = `${dateArr[2]} ${months[+dateArr[1]]} ${dateArr[0]}`
   return (
      <CardStyled key={id}>
         <CardContentStyled>
            <ContainerIdStyled>{id}</ContainerIdStyled>
            <ContainerPaymentDateStyled>Due {dueDate}</ContainerPaymentDateStyled>
            <ContainerClientNameStyled>{clientName}</ContainerClientNameStyled>
            <ContainerTotalStyled>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(Number(total))}</ContainerTotalStyled>
            
            <ContainerStatusStyled
               style={{
                  ...statusColor
               }}>
               
               <IconDot
                  style={{
                     backgroundColor: statusColor.color, 
                     padding: 0,
                     // margin: 0
                  }} />
                  {status.charAt(0).toUpperCase()+status.slice(1)}
            </ContainerStatusStyled>
            <ButtonArrow>
               <IconArrow style={{transform: 'scale(1.2, 1.2)'}}/>
            </ButtonArrow>
            
         </CardContentStyled>
      </CardStyled>
   );
}

export default InvoiceCard;

/*
<Dot 
                  style={{
                     paddingBottom: '11%',
                     transform: 'scale(1rem, 1rem)'
                  }}/>

<ContainerStatusStyled
               style={{
                  color: statusColor
               }}>
               <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '5rem',
                  fontSize: '5rem',
                  lineHeight: '-20%',
                  border: '1px solid blue'}}>.</div> 
               {status}</ContainerStatusStyled>
         </CardContentStyled>
*/