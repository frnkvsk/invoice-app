import React, { useState } from 'react';

import { Button, Icon, InputLabel, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import { styled, Box } from '@mui/system';

import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg'
import FormTextField from '../form-textField/form-textField.component'
import { theme } from '../../theme';

const StyledBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between'
});
  
const StyledDeleteIcon = styled(Button)({
   
   // '&:hover': {
   //    cursor: 'hand'
   // }
});
const ButtonStyled = styled(Button)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: 25,
   height: 25,
   marginTop: 18,
   // padding: 5,
   // fontSize: 15,
   // fontWeight: 'normal',
   // color: theme.palette.common.light_bg,
   // backgroundColor: theme.palette.primary.main,
   textTransform: 'none',
   border: 'none',
   // borderRadius: 30,
   // minWidth: 165,
   
});

const IconWrapper = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   // width: '2.3em',
   // height: '2.3em',
   // backgroundColor: '#FFFFFF',
   // borderRadius: 25,
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

   const handleSetItemList = (idx, key, val) => {
      itemList[idx][key] = val;
      setItemList([...itemList]);
      props.handleChange([...itemList])
   }
   // const NewFormRow = (props) => (
   //    <div
   //       style={{
   //          display: 'flex',
   //          // justifyContent: 'space-between',
   //          border: '1px solid yellow'
   //       }}>
   //       <FormTextField id='ftf1' size='7em'/>
   //       <FormTextField id='ftf1' size='2em'/>
   //       <FormTextField id='ftf1' size='7em'/>
   
   //    </div>
   // )
   console.log('itemList',itemList)
   return (
      <div>
         {itemList.map((row, idx) =>(
            <StyledBox key={'itemList'+idx}>
               <FormTextField 
                  id={'name'+idx} 
                  label={!idx ? 'Item Name' : ''}
                  value={row.name} 
                  // handleChange={(e) => handleSetItemList(idx, 'name', e)}
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
                  width='4em' />
               <FormTextField 
                  id={'price'+idx} 
                  label={!idx ? 'Price' : ''}
                  value={row.price} 
                  handleChange={(e) => {
                     itemList[idx].price = e;
                     setItemList([...itemList])
                  }}
                  width='5em' />
               <FormTextField
                  id={'total'+idx}
                  label={!idx ? 'Total' : ''}
                  value={+row.qty * + row.price}
                  handleChange={() => null}
                  width='5em' />

               <ButtonStyled
                  id={'delete'+idx}                  
                  onClick={() => {
                     setItemList([...itemList.filter((_,i) => i !== idx)])
                  }}>
                     <IconWrapper>
                        <IconDelete />
                     </IconWrapper>
                  </ButtonStyled>
            </StyledBox>            
         ))}

         <Button
            variant='outlined'
            onClick={() => setItemList([...itemList, {name: '',
            qty: 0,
            price: 0,
            total: 0}])}
            >Add New Item</Button>
      </div>
   );
}
   

export default FormItemList;