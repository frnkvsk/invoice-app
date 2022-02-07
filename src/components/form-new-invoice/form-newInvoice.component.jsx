import React, { useContext, useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import FormTextField from '../form-textField/form-textField.component';
import DatePicker from '../datePicker/datePicker.component';
import FormSelectPaymentTerms from '../form-select-paymentTerms/select-paymentTerms.component';
import FormItemList from '../form-itemList/form-itemList.component';
import Button3 from '../buttons/button-3.component';
import Button2 from '../buttons/button-2.component';
import Button4 from '../buttons/button-4.component';
import { LightingContext } from '../../context/lighting.context';
import { theme } from '../../theme';


const StyledBoxFormWrapper = styled(Box)({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 450,
  top: 0,
  left: 80,
  height: '100vh',
  paddingLeft: 20,
  // paddingRight: 10,
  backgroundColor: theme.palette.common.light_bg,
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,  

  // border: '1px solid pink'
});

const StyledBoxFormTop = styled(Box)({  
  width: '95%',
  marginTop: 20,
  // marginBottom: 20,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 20,
  // backgroundColor: 'green',
  backgroundColor: theme.palette.common.light_bg,
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    width: '0.8em',
  },
  '&::-webkit-scrollbar-track': {    
    // boxShadow: `inset 0 0 1px ${theme.palette.common.light_bg}`,
    // webkitBoxShadow: `inset 0 0 1px ${theme.palette.common.light_bg}`,
    backgroundColor: theme.palette.common.light_bg
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.secondary.light,//'rgba(0,0,0,.1)',
    borderRadius: 20
  },
  '&::-webkit-scrollbar-button': {
    backgroundColor: theme.palette.common.pending
  },
  '&::-webkit-scrollbar-corner': {
    backgroundColor: theme.palette.common.light_bg
  },
  '&::-webkit-scrollbar:horizontal': {
    height: 0
  }
  
 

  // border: '1px solid pink'
});

const StyledBoxFormBottom = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: 0,
  margin: 0,
  // backgroundColor: theme.palette.common.light_bg,
  height: 100,
  borderRadius: 15,
  // border: '1px solid blue'
  
});

const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  // backgroundColor: theme.palette.common.light_bg,
  margin: '0 15px 0 15px',
  padding: 0,
  
  // border: '1px solid yellow'
});

export default function FormNewInvoice({handleClose}) {

  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let [topBoxHeight, setTopBoxHeight] = useState(0);
  let [bottomBoxHeight, setBottomBoxHeight] = useState(0);
  let [boxWrapperHeight, setBoxWrapperHeight] = useState(1000);
  let [gap, setGap] = useState(100)
  

  const lightingContext = useContext(LightingContext);
  const [lightingState, setLightingState] = useState(lightingContext.lightingState);

  useEffect(() => {
    setLightingState(lightingContext.lightingState);
  }, [lightingContext.lightingState]);

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
    if(ref1.current){
      setTimeout(() => {
        setTopBoxHeight(ref1.current.clientHeight) 
        setBottomBoxHeight(ref2.current.clientHeight)
        setBoxWrapperHeight(ref3.current.clientHeight)
        
      }, 100)
    }
  }, [itemList.length])

  useEffect(() => {
    setGap(boxWrapperHeight - (topBoxHeight + bottomBoxHeight))
  }, [boxWrapperHeight, topBoxHeight, bottomBoxHeight]);

  useEffect(() => {
    setTimeout(() => setChecked(true), 1500);
    // if(ref2.current) {
    //   setTimeout(() => {
        
    //   }, 100)
    // }
    // if(ref3.current) {
    //   setTimeout(() => {
        
    //   }, 100)
    // }
  },[]);

  const handleCloseEvent = () => {
    handleClose();
  }

  // let box = document.querySelector('#styledBoxFormTop');

  // let [ht, setHT] = useState(box ? box.innerHTML.height : 0);

  // if(box) {
  //   setHT(box.innerHTML.height)
  // }
  // console.log(itemList)
  // console.log(boxWrapperHeight - (topBoxHeight + bottomBoxHeight))

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

        <StyledBoxFormWrapper ref={ref3}>
        
          <StyledBoxFormTop
            id='styledBoxFormTop'
            ref={ref1}
            component="form"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            
            sx={{
              // '& .MuiTextField-root': { m: 1, width: '9ch' },
              
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
            {gap}
            <FormItemList handleChange={(e) => setItemList([...e])}/>

            
            
            
            
            
          </StyledBoxFormTop>

            
        
          <StyledBoxFormBottom 
            id='styledBoxFormBottom'
            style={{
              backgroundColor: gap < 45 ? 'white' : theme.palette.common.light_bg
            }}
            ref={ref2} >
                <StyledContainer>
                  <Button3 clickHandler={handleCloseEvent}>Discard</Button3>
                </StyledContainer>
                <StyledContainer>                
                  <Button4>Save as Draft</Button4>
                  <Button2>Save & Send</Button2>
                </StyledContainer>
          </StyledBoxFormBottom>
          
        </StyledBoxFormWrapper>   
    </Slide>  
  </>
  );
}
