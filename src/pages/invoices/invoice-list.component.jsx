import React, { useContext, useEffect, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';

import { LightingContext } from '../../context/lighting.context';
import { DataContext } from '../../context/data.context';
import NavbarHorizontalMain from '../../components/nav/navbar-horizontal-main/navbarHorizontalMain.component';
import InvoiceListCard from './invoice-list-card.component';
import InvoiceListCardEmpty from './invoice-list-card-empty.component';
import FormNewInvoice from '../../components/form-new-invoice/new-invoice.component';
import { withStyles } from "@material-ui/core/styles";

const StyledBoxBackdrop = withStyles({
   root: {
     position: "absolute",
     zIndex: 1
   }
 })(Backdrop);

const InvoiceList = () => {  

   const [showNewInvoiceForm, setShowNewInvoiceForm] = useState(false);
   const handleNewInvoiceFormOpenClose = () => setShowNewInvoiceForm(!showNewInvoiceForm);

   const lightingContext = useContext(LightingContext);
   const dataContext = useContext(DataContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);
   const [displayState, setDisplayState] = useState(null);
   const [data, setData] = useState([]);
   const [invoices, setInvoices] = useState([]);
   const [invoiceCount, setInvoiceCount] = useState(0);

   const handleMenuSelect = (value) => {
      setDisplayState(value);
   }
   
   useEffect(() => {
      setData(dataContext.data);
   }, [dataContext.data])
   

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   useEffect(() => {
      setInvoices(
         displayState === 'all' ?
            data :
            data.filter(f => f.status === displayState) 
      );      
   }, [displayState, data]);
   
   useEffect(() => {
      setInvoiceCount(invoices.length);
   }, [invoices]);
   
   return (
      <>      
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         width: '100%',
         height: '100vh',
         backgroundColor: 'transparent',
      }}>

      <NavbarHorizontalMain handleMenuSelect={handleMenuSelect} invoiceCount={invoiceCount} handleNewInvoiceFormOpenClose={handleNewInvoiceFormOpenClose}/>

      <div style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         width: '100%',
         height: '100vh',
      }}>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50%',
            }}>
            {displayState ?
               (invoices.map(invoice => (
                  <InvoiceListCard key={invoice.id} {...invoice} />               
               ))) :
               (                  
                  <InvoiceListCardEmpty />                                  
               )
            }            
         </div>         
      </div>
      <StyledBoxBackdrop open={showNewInvoiceForm}>  
         <FormNewInvoice open={showNewInvoiceForm} handleClose={handleNewInvoiceFormOpenClose}/> 
      </StyledBoxBackdrop> 
      </div>        
      </>  
   );
};

export default InvoiceList;
