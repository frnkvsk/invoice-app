import React, { useState, useContext, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import Slide from '@mui/material/Slide';



import { theme } from '../../../theme';

import { LightingContext } from '../../../context/lighting.context';
import Button1 from '../../../components/buttons/button-1.component';
import SelectFilterByStatus from '../../select-filterByStatus/selectFilterByStatus.component';
// import FormNewInvoice from '../../forms/formNewInvoice.component';



const AppBarStyled = styled(AppBar)({
   position: 'relative',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: 70,
   marginTop: 40,
   backgroundColor: 'transparent',
   boxShadow: 'none',
   zIndex: 1
});


const ToolBarStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '50%',
   paddingLeft: 0,
});

const Heading = styled(Typography)({
   ...theme.typography.h1,
});
const SubHeading = styled(Typography)({
   ...theme.typography.body1,
});

export default function NavbarHorizontalMain({handleMenuSelect, invoiceCount, handleNewInvoiceFormOpenClose}) {
   const containerRef = React.useRef(null);

   
  

   
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({}
      // lightingContext.lightingState.bg_lighting === 'light' ? 
      //    theme.palette.common.dark_1 :
      //    theme.palette.common.light_bg
   );

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
         // lightingContext.lightingState.bg_lighting === 'light' ? 
         //    theme.palette.common.dark_1 :
         //    theme.palette.common.light_bg);
   }, [lightingContext.lightingState]);


   const buttonClickHandler = () => {
      console.log('NavbarHorizontalMain button1 New Invoice clicked')
      console.log('lightingState',lightingState)
      handleNewInvoiceFormOpenClose();
   }
   
   return (    
      <>
      
         <AppBarStyled
            ref={containerRef}
            >
            <ToolBarStyled>
               <div style={{...lightingState}}>
                  <Heading
                     style={{...lightingState}}>Invoices</Heading>
                  {invoiceCount > 0 ?
                     <SubHeading>There are {invoiceCount} total invoices</SubHeading>
                     :
                     <SubHeading>No invoices</SubHeading>
                  }
                  
               </div>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     width: '42%',
                  }}>
                  <SelectFilterByStatus handleMenuSelect={handleMenuSelect}/>
                  <Button1 clickHandler={buttonClickHandler} />
               </div>                        
            </ToolBarStyled>    
         </AppBarStyled> 
         
      
      </>

      
   );
}
