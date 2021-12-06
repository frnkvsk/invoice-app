import React, { useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { Card, Container, Paper  } from '@mui/material';
import { styled } from '@mui/system';

import { theme } from '../../theme';
import TableOrders from '../../components/tables/table-orders.component';
import { LightingContext } from '../../context/lighting.context';

const ContainerHeading = styled(Container)({
   display: 'flex',
   alignItems: 'flex-start',
   justifyContent: 'space-between',

   // margin: 5,
   width: '98%',
   marginTop: 10,
   marginLeft: 20,
   marginRight: 20,
   // minHeight: 90,
   // 
   // marginBottom: 10,
   // border: '1px solid blue'
});

const ContainerInfo = styled(Container)({
   display: 'flex',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '100%',
   marginTop: 10,
   marginBottom: 10,
   // border: '1px solid orange'
});

const ContainerOrders = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '100%',
   marginTop: 10,
   marginBottom: 10,
   // border: '1px solid green'
});

const Item = styled(Container)({
   ...theme.typography.body2,
   width: '45%',
   minHeight: 150,
   paddingTop: 15,
   paddingLeft: 0,
   // textAlign: 'left',
   
   // color: theme.palette.text.secondary,
   // border: '1px solid yellow'
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
   // const history = useHistory();  
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({});

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
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

   console.log('InvoiceCard lightingState',lightingState)
   console.log('InvoiceCard lightingContext',lightingContext)
   return (
      <Card 
         sx={{ 
            width: 1,
            padding: 3,
            border: 'none',
            boxShadow: 'none',
            ...lightingState
         }}>
         <ContainerHeading>
            <div>
               <ItemBold 
                  style={{...lightingState}}>#{id}</ItemBold>
               <div>{description}</div>
            </div>
            <div>
               <div>{senderAddress.street}</div>
               <div>{senderAddress.city}</div>
               <div>{senderAddress.postCode}</div>
               <div>{senderAddress.country}</div>
            </div>
         </ContainerHeading>

         <ContainerInfo>
            
            <Item>
               <div>
                  <div>Invoice Date</div>
                  <ItemBold 
                  style={{...lightingState}}>{dateFormat(createdAt)}</ItemBold>
               </div>
               <div>
                  <div style={{marginTop: 15}}>Payment Due</div>
                  <ItemBold 
                  style={{...lightingState}}>{dateFormat(paymentDue)}</ItemBold>
               </div>
            </Item>
            <Item>
               <div>Bill To</div>
               <ItemBold 
                  style={{...lightingState}}>{clientName}</ItemBold>
               <div>{clientAddress.street}</div>
               <div>{clientAddress.city}</div>
               <div>{clientAddress.postCode}</div>
               <div>{clientAddress.country}</div>
            </Item>
            <Item sx={{ width: 1 }}>
               <div>Send To</div>
               <ItemBold 
                  style={{...lightingState}}>{clientEmail}</ItemBold>
            </Item>
         </ContainerInfo>

         <ContainerOrders>
            <TableOrders header={['Item Name', 'Qty.', 'Price', 'Total']} rows={items} total={total} />
         </ContainerOrders>
      </Card>
   );
}

export default InvoiceCard;

/**
 * 
 * 
 * <ContainerOrders>
            <ContainerOrdersList>
            </ContainerOrdersList>

            <ContainerOrdersTotals>
               <div>Amount Due</div>
               <div>{total}</div>
            </ContainerOrdersTotals>
         </ContainerOrders>



 * <CardStyled key={id}>
      
         <CardContentStyled>
           
            
            
         </CardContentStyled>
      </CardStyled>
 * 
 * 
 * 
 * {
    "id": "XM9141",
    "createdAt": "2021-08-21",
    "paymentDue": "2021-09-20",
    "description": "Graphic Design",
    "paymentTerms": 30,
    "clientName": "Alex Grim",
    "clientEmail": "alexgrim@mail.com",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "84 Church Way",
      "city": "Bradford",
      "postCode": "BD1 9PB",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Banner Design",
        "quantity": 1,
        "price": 156.00,
        "total": 156.00
      },
      {
        "name": "Email Design",
        "quantity": 2,
        "price": 200.00,
        "total": 400.00
      }
    ],
    "total": 556.00
  },
 * 
 */
