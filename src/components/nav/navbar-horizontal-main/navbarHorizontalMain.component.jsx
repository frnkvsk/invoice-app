import React, { useState, useEffect, useContext } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { theme } from '../../../theme';
import { LightingContext } from '../../../context/lighting.context';
import Button1 from '../../../components/buttons/button-1.component';
import SelectFilterByStatus from '../../select-filterByStatus/selectFilterByStatus.component';

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
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);


   const buttonClickHandler = () => {
      handleNewInvoiceFormOpenClose();
   }
   
   return (    
      <>      
         <AppBarStyled
            ref={containerRef}
            >
            <ToolBarStyled>
               <div>
                  <Heading style={{...lightingState.color_1}}>Invoices</Heading>
                  {invoiceCount > 0 ?
                     <SubHeading style={{...lightingState.color_1}}>There are {invoiceCount} total invoices</SubHeading>
                     :
                     <SubHeading style={{...lightingState.color_1}}>No invoices</SubHeading>
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
                  <Button1 clickHandler={buttonClickHandler}>
                     New Invoice
                  </Button1>
               </div>                        
            </ToolBarStyled>    
         </AppBarStyled>     
      </>
   );
}
