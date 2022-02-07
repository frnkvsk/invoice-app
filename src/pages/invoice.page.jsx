import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

import { styled } from '@mui/system';
import { Link } from '@mui/material';

import { ReactComponent as IconArrow } from '../assets/icon-arrow-left.svg';
import NavbarInvoice from '../components/nav/navbar-invoice/navbarInvoice.component';
import InvoiceCard from '../components/invoice/invoice-card.component';
import { LightingContext } from '../context/lighting.context';
import { DataContext } from '../context/data.context';


const ButtonArrow = styled(Link)({
   width: 80,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingBottom: 20,
   textDecoration: 'none',
});

const Invoice = () => {   
   const history = useHistory();
   const location = useLocation();
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   const dataContext = useContext(DataContext);
   const id = location.pathname.split('/')[2];
   const data = dataContext.data.filter(e => e.id === id)[0];

   return (
      <div style={{
         ...lightingState.color_1,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'flex-start',
         width: '100%',
         height: '100vh',
         marginTop: 30
      }}>
         <div
            style={{
               width: '50%',
               paddingTop: 28,
               // border: '1px solid pink'
            }}>
            <ButtonArrow
               component='button'
               style={{
                  ...lightingState.color_1
               }}
               onClick={() => history.goBack()}>
               <IconArrow style={{transform: 'scale(1.2, 1.2)'}}/>
               <strong>Go back</strong>
            </ButtonArrow>
         </div>
      
         <div style={{
            width: '50%',
            borderRadius: 10 
         }}>
            <NavbarInvoice status={data.status} />
         </div>         

         <div style={{
            display: 'flex',
            // alignItems: 'center',
            marginTop: 30,
            justifyContent: 'center',
            width: '50%',
            // height: '100vh',
         }}>
            <InvoiceCard {...data} />
         </div>
      </div>      
   );
};

export default Invoice;