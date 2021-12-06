import React, { useContext, useEffect, useState } from 'react';

import { theme } from '../../theme';
import { LightingContext } from '../../context/lighting.context';
import { ReactComponent as ImageIllustrationEmpty } from '../../assets/illustration-empty.svg';

const InvoiceListCardEmpty = () => {   
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState({});  

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);
   
   console.log('InvoiceListCardEmpty lightingState',lightingState)
   // console.log('data:',data)
   return (
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
   );
};

export default InvoiceListCardEmpty;
