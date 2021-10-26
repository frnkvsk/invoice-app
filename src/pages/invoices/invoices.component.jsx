import React, { useContext, useEffect, useState } from 'react';
// import DesignSystemPartsDisplay from '../designSystemPartsDisplay';
import { LightingContext } from '../../context/lighting.context';
import { theme } from '../../theme';
import NavbarHorizontalMain from '../../components/nav/navbar-horizontal-main/navbarHorizontalMain.component';
import { ReactComponent as ImageIllustrationEmpty } from '../../assets/illustration-empty.svg';
import InvoiceCard from './invoice-card.component';
// import { styled } from '@mui/system';

// const ImageIllustrationEmptyStyled = styled(Image_illustration_empty)({
   // display: 'flex',
   // objectFit: 'cover',
   // alignItems: 'center',
   // justifyContent: 'center',
   // width: '50%',
   // height: 'auto',
   // border: '1px solid blue'
// });


const Invoices = () => {
   
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState.bg_lighting === 'light' ? theme.palette.common.light_bg : theme.palette.common.dark_1);
   const [displayState, setDisplayState] = useState(null);
   const [data, setData] = useState([]);

   const handleMenuSelect = (value) => {
      setDisplayState(value);
      console.log(value)
   }

   const getData = () => {
      fetch('data.json'
      ,{
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })
      .then(response => {
         return response.json();
      })
      .then(data => {
         setData(data)
      })
   }

   useEffect(() => {
      setLightingState(lightingContext.lightingState.bg_lighting === 'light' ? theme.palette.common.light_bg : theme.palette.common.dark_1);
   }, [lightingContext.lightingState]);
   
   useEffect(() => {
      getData();
   }, []);
   
   console.log('data',data)
   return (
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         width: '100%',
         height: '100vh',
         backgroundColor: lightingState,
         // marginTop: 130,
         // marginLeft: 130,
         // border: '1px solid blue',
      }}>

      <NavbarHorizontalMain handleMenuSelect={handleMenuSelect}/>
      <div style={{
         display: 'flex',
         // flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         width: '100%',
         height: '100vh',
      
         // paddingTop: 'calc(100vh / 3)',
         // border: '1px solid blue',
      }}>
         <container
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50%',
               // border: '1px solid red'
            }}>
            {displayState === 'paid' ?
               (data.filter(f => f.status === 'paid').map(invoice => (
                  <InvoiceCard {...invoice} />               
               ))) :
               displayState === 'pending' ?
               (data.filter(f => f.status === 'pending').map(invoice => (
                  <InvoiceCard {...invoice} />               
               ))) :
               displayState === 'draft' ?
               (data.filter(f => f.status === 'draft').map(invoice => (
                  <InvoiceCard {...invoice} />               
               ))) :
               displayState === 'all' ?
               (data.map(invoice => (
                  <InvoiceCard {...invoice} />               
               ))) :
               (
                  <>
                     <ImageIllustrationEmpty 
                        style={{
                           transform: 'scale(1.5, 1.5)'
                        }}/>
                     <div
                        style={{
                           ...theme.typography.h2,
                           transform: 'scale(1.5, 1.5)',
                           marginTop: 140
                        }}>
                        There is nothing here
                        <div
                           style={{
                              ...theme.typography.body2,
                              textAlign: 'center',
                              color: theme.palette.secondary.main,
                              marginTop: 20
                           }}>
                           <div>Create an invoice by clicking the<br /><strong>New Invoice</strong> button and get started</div>
                        </div>
                     </div>
               </>
               )
            }
            
         </container>         
      </div>
      </div>      
   );
};

export default Invoices;
