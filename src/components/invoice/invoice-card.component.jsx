import React, { useContext, useEffect, useState } from 'react';

import { Card, Container, Paper  } from '@mui/material';
import { styled } from '@mui/system';

import { theme } from '../../theme';
import TableOrders from '../tables/table-orders.component';
import { LightingContext } from '../../context/lighting.context';

const ContainerHeading = styled(Container)({
   display: 'flex',
   alignItems: 'flex-start',
   justifyContent: 'space-between',   
   width: '98%',
   marginTop: 10,
   marginLeft: 20,
   marginRight: 20,     
});

const ContainerInfo = styled(Container)({
   display: 'flex',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '100%',
   marginTop: 10,
   marginBottom: 10,
});

const ContainerOrders = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '100%',
   marginTop: 10,
   marginBottom: 10,
});

const Item = styled(Container)({
   ...theme.typography.body2,
   width: '45%',
   minHeight: 150,
   paddingTop: 15,
   paddingLeft: 0,
 });

const ItemBold = styled(Paper)({
   ...theme.typography.h3,
   paddingTop: 6,
   paddingBottom: 6,
   border: 'none',
   boxShadow: 'none',
   backgroundColor: 'transparent'
});

const dateFormat = (dateIn) => {
   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const dateArr = dateIn.split('-');
   return `${dateArr[2]} ${months[+dateArr[1]]} ${dateArr[0]}`;
}

const InvoiceCard = ({id, description, createdAt, paymentDue, senderAddress, clientName, total, status, items,clientAddress, clientEmail}) => { 
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   return (
      <Card 
         sx={{ 
            width: 1,
            padding: 3,
            border: 'none',
            boxShadow: 'none',
            ...lightingState.color_6,
         }}
         >
         <h1>Invoice Card</h1>
         <ContainerHeading>
            <div>
               <ItemBold style={{...lightingState.color_6}}>
                  <span style={{color: theme.palette.secondary.main}}>#</span>{id}</ItemBold>
               <div
                  style={{
                     ...lightingState.color_7,
                     ...theme.typography.body2
                  }}>Graphic Design</div>
            </div>
            <div 
               style={{
                  ...lightingState.color_7,
                  ...theme.typography.body2,
                  textAlign: 'right', }}>
               <div>{senderAddress.street}</div>
               <div>{senderAddress.city}</div>
               <div>{senderAddress.postCode}</div>
               <div>{senderAddress.country}</div>
            </div>
         </ContainerHeading>

         <ContainerInfo>            
            <Item>
               <div>
                  <div 
                     style={{
                        ...lightingState.color_7
                     }}>Invoice Date</div>
                  <ItemBold 
                     style={{
                        ...lightingState.color_6
                     }}>{dateFormat(createdAt)}</ItemBold>
               </div>
               <div>
                  <div 
                     style={{
                        ...lightingState.color_7,
                         marginTop: 15
                     }}>Payment Due</div>
                  <ItemBold 
                     style={{
                        ...lightingState.color_6
                     }}>{dateFormat(paymentDue)}</ItemBold>
               </div>
            </Item>
            <Item>
               <div 
                  style={{
                     ...lightingState.color_7
                  }}>Bill To</div>
               <ItemBold 
                  style={{...lightingState.color_6}}>{clientName}</ItemBold>
               <div>{clientAddress.street}</div>
               <div>{clientAddress.city}</div>
               <div>{clientAddress.postCode}</div>
               <div>{clientAddress.country}</div>
            </Item>
            <Item sx={{ width: 1 }}>
               <div 
                  style={{
                     ...lightingState.color_7
                  }}>Sent To</div>
               <ItemBold 
                  style={{...lightingState.color_6}}>{clientEmail}</ItemBold>
            </Item>
         </ContainerInfo>

         <ContainerOrders>
            <TableOrders header={['Item Name', 'QTY.', 'Price', 'Total']} rows={items} total={total} />
         </ContainerOrders>
      </Card>
   );
}

export default InvoiceCard;