import React from 'react';

import { theme } from '../../theme';
import { ReactComponent as ImageIllustrationEmpty } from '../../assets/illustration-empty.svg';

const InvoiceListCardEmpty = () => {   
   
   return (
      <>
         <ImageIllustrationEmpty 
            style={{
               transform: 'scale(1.5, 1.5)'
            }}/>
         <div
            style={{
               ...theme.typography.h2,
               transform: 'scale(1.4, 1.4)',
               marginTop: 140
            }}>
            There is nothing here
            <div
               style={{
                  ...theme.typography.subtitle2,
                  textAlign: 'center',
                  marginTop: 10
               }}>
               Create an invoice by clicking the<br />
               <strong>New Invoice</strong> button and get started
            </div>
         </div>
      </>      
   );
};

export default InvoiceListCardEmpty;
