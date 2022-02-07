import React, { useState } from 'react';

import { Button, InputLabel } from '@mui/material';
import { styled, Box } from '@mui/system';

import { ReactComponent as IconPlus } from '../../assets/icon-plus-gray.svg'
import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg';
import FormTextField from '../form-textField/form-textField.component';
import { theme } from '../../theme';
import Button6 from '../buttons/button-6.component';


const StyledBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',   
   marginBottom: 0,
   marginTop: 0,
});
  
const ButtonStyled = styled(Button)({
   display: 'flex',
   width: 25,
   height: 25,
   textTransform: 'none',   
});

const StyledBoxTotal = styled(Box)({
   ...theme.typography.body2,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '4em',
   height: '4em',
   paddingLeft: 10,
});

const IconWrapper = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft: 0,
   marginRight: '0.5em',
   '&:hover': {
      color: 'blue'
   }
});


const FormItemList = (props) => {
   const initialState = {
      name: '',
      qty: 0,
      price: 0,
      total: 0
   }
   const [itemList, setItemList] = useState([]);

   const handleItemListAdd = () => {
      
      setItemList([...itemList, {name: '',
            qty: 0, price: 0, total: 0}]);
      props.handleChange([...itemList]);
   }

   const handleItemListRemove = (idx) => {
      setItemList([...itemList.filter((_,i) => i !== idx)]);
      props.handleChange([...itemList]);
   }

   return (
      <div>
         {itemList.map((row, idx) =>(
            <StyledBox 
               key={'itemList'+idx}
               style={{
                  paddingTop: idx ? 2 : 0,
                  paddingBottom: idx ? 0 : 5
               }}>
               <FormTextField 
                  id={'name'+idx} 
                  label={!idx ? 'Item Name' : ''}
                  value={row.name} 
                  handleChange={(e) => {
                     itemList[idx].name = e;
                     setItemList([...itemList])
                  }}
                  width='10em' />
               <FormTextField 
                  id={'qty'+idx} 
                  label={!idx ? 'Qty' : ''}
                  value={row.qty} 
                  handleChange={(e) => {
                     itemList[idx].qty = e;
                     setItemList([...itemList])
                  }}
                  width='5em' />
               <FormTextField 
                  id={'price'+idx} 
                  label={!idx ? 'Price' : ''}
                  value={row.price} 
                  handleChange={(e) => {
                     itemList[idx].price = e;
                     setItemList([...itemList])
                  }}
                  width='7em' />
               
               <StyledBoxTotal 
                  id={'total'+idx}
                  handleChange={(e) => null}
                  style={{
                     width: '5em',
                     marginBottom: 3,
                  }}>
                  <InputLabel 
                     htmlFor='total'
                     style={{
                        ...theme.typography.body2,
                        }}>
                     {idx === 0 ? 'Total' : ''}   
                  </InputLabel>
                  <div
                     id='total'
                     style={{
                        ...theme.typography.body2,
                        padding: 5,
                        paddingTop: idx ? 14 : 5
                     }}>
                  {+row.qty * + row.price}   
                  </div>  
               
               </StyledBoxTotal>

               <ButtonStyled                  
                  id={'delete'+idx}  
                  style={{
                     paddingTop: idx ? 2 : 14
                  }}                
                  onClick={() => handleItemListRemove(idx)}>
                     <IconWrapper>
                        <IconDelete />
                     </IconWrapper>
               </ButtonStyled>
            </StyledBox>            
         ))}

         <Button6
            clickHandler={handleItemListAdd}
            otherStyles={{
               display: 'flex',
               justifyContent: 'center',
               width: '100%'
            }}
            >
            <IconPlus
              style={{
                transform: 'scale(0.6, 0.6)',
              }}/>
            Add New Item
         </Button6>
         
      </div>
   );
}
   

export default FormItemList;