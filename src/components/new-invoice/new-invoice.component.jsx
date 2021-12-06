import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

import FormTextField from '../form-textField/form-textField.component';
import DatePicker from '../datePicker/datePicker.component';

import SelectPaymentTerms from '../select-paymentTerms/selectPaymentTerms.component';
import FormItemList from '../form-itemList/formItemList.component';

const StyledBoxForm = styled(Box)({
   position: 'absolute',
   width: 400,
   top: 0,
   left: 80,
   height: '100vh',
   paddingLeft: 40,
   paddingRight: 10,
   backgroundColor: 'white',
   zIndex: 100,
});

const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
});

export default function NewInvoice({handleClose}) {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreetAddress, setClientStreetAddress] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostCode, setClientPostCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [invoiceDate, setInvoiceDate] = useState([]);
  const [paymentTerms, setPaymentTerms] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [itemList, setItemList] = useState([]);
  
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => setChecked(true), 1500);
  },[]);

  const handleCloseEvent = () => {
    // setTimeout(() => setChecked(false), 1500);
    handleClose();
  }
  // console.log('NewInvoice itemList',itemList)
  return (
  <>
    <Slide 
      direction='right' 
      in={checked} 
      mountOnEnter 
      unmountOnExit
      // style={{
      //   transition: 'right 2s'
      // }}
      easing={{
        enter: 'right 2s'
      }}
      >
        <StyledBoxForm
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '9ch' },
          }}>
          <h2>New Invoice</h2>
          
          <h5>Bill From</h5>


          <FormTextField 
            id='streetAddress' 
            value={streetAddress} 
            handleChange={setStreetAddress} 
            width='33.5em'
            label='Street Address'
          />
          <StyledContainer>
            <FormTextField 
              id='city' 
              value={city} 
              handleChange={setCity} 
              width='10em'
              label='City'
            />
            <FormTextField 
              id='postCode' 
              value={postCode} 
              handleChange={setPostCode} 
              width='10em'
              label='Post Code'
            />
            <FormTextField 
              id='country' 
              value={country} 
              handleChange={setCountry} 
              width='10em'
              label='Country'
            />
          </StyledContainer>

          <h5>Bill To</h5>
          <FormTextField 
            id='clientName' 
            value={clientName} 
            handleChange={setClientName} 
            width='33.5em'
            label="Client's Name"
          />
          <FormTextField 
            id='clientEmail' 
            value={clientEmail} 
            handleChange={setClientEmail} 
            width='33.5em'
            label="Client's Email"
          />
          <FormTextField 
            id='clientStreetAddress' 
            value={clientStreetAddress} 
            handleChange={setClientStreetAddress} 
            width='33.5em'
            label='Street Address'
          />
          <StyledContainer>
            <FormTextField 
              id='clientCity' 
              value={clientCity} 
              handleChange={setClientCity} 
              width='10em'
              label='City'
            />
            <FormTextField 
              id='clientPostCode' 
              value={clientPostCode} 
              handleChange={setClientPostCode} 
              width='10em'
              label='Post Code'
            />
            <FormTextField 
              id='clientCountry' 
              value={clientCountry} 
              handleChange={setClientCountry} 
              width='10em'
              label='Country'
            />  
          </StyledContainer>
              
          <StyledContainer>
            <DatePicker
              value={invoiceDate}
              handleChange={setInvoiceDate}
              style={{width: 85}} />
            <SelectPaymentTerms value={paymentTerms} handleChange={setPaymentTerms}/>
          </StyledContainer>
          
          <FormTextField 
            id='projectDescription' 
            value={projectDescription} 
            handleChange={setProjectDescription} 
            width='33.5em'
            label='Project Description'
          />  
          
          <h3>Item List</h3>
          <FormItemList handleChange={(e) => setItemList(e)}/>


          <Button onClick={handleCloseEvent} >Close Form</Button>
          
          
          </StyledBoxForm>

          
    </Slide>  
  </>
    
  );
}
