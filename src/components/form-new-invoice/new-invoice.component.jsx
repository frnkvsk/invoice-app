import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import FormTextField from '../form-textField/form-textField.component';
import DatePicker from '../datePicker/datePicker.component';
import FormSelectPaymentTerms from '../form-select-paymentTerms/selectPaymentTerms.component';
import FormItemList from '../form-itemList/formItemList.component';
import Button3 from '../buttons/button-3.component';
import { theme } from '../../theme';

const StyledBoxFormWrapper = styled(Box)({
  position: 'absolute',
  display: 'flex',
  width: 450,
  top: 0,
  left: 80,
  height: '100vh',
  paddingLeft: 20,
  paddingRight: 10,
  backgroundColor: 'white',
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,
  // overflow: 'scroll',
  // '&::-webkit-scrollbar': {
  //   width: '0.4em'
  // },
  // '&::-webkit-scrollbar-track': {
  //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   backgroundColor: 'rgba(0,0,0,.1)',
  //   outline: '1px solid slategrey'
  // }
});

const StyledBoxForm = styled(Box)({
  // position: 'absolute',
  width: '95%',
  // top: 0,
  // left: 80,
  height: '80vh',
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: 'white',
  border: '1px solid pink',
  // borderRadius: 15,
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey'
  }
});

const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
});

export default function FormNewInvoice({handleClose}) {
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
    handleClose();
  }
  
  return (
  <>
    <Slide 
      direction='right' 
      in={checked} 
      mountOnEnter 
      unmountOnExit
      easing={{
        enter: 'right 2s'
      }}
      >
        <StyledBoxFormWrapper>
          <StyledBoxForm
            component="form"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile

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
              <FormSelectPaymentTerms value={paymentTerms} handleChange={setPaymentTerms}/>
            </StyledContainer>
            
            <FormTextField 
              id='projectDescription' 
              value={projectDescription} 
              handleChange={setProjectDescription} 
              width='33.5em'
              label='Project Description'
              style={{
                ...theme.typography.body2,
              }}
            />  
            
            <h3>Item List</h3>
            <FormItemList handleChange={(e) => setItemList(e)}/>

            
            <Button3 clickHandler={handleCloseEvent}>Discard</Button3>
            
            
            
            </StyledBoxForm>
        </StyledBoxFormWrapper>
        
          
          
    </Slide>  
  </>
    
  );
}
