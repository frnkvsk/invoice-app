import { useEffect, useState } from 'react';

import Popup from 'reactjs-popup';

import { styled } from '@mui/material/styles';
import { Button, InputLabel } from '@mui/material';

import { theme } from '../../theme';
import { ReactComponent as IconCalendar} from '../../assets/icon-calendar.svg';
import DatePickerPopup from './popup-calendar.component';
import { Box } from '@mui/system';

const DatePickerStyled = styled(Button)({
   ...theme.typography.body2,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: 180,
   height: 30,
   padding: '0 15px',
   color: theme.palette.common.dark_2,
   backgroundColor: 'transparent',
   textTransform: 'none',
   marginBottom: 7,
   border: `1px solid ${theme.palette.secondary.main}83`,
   borderRadius: 5,
   '&:hover': {
      backgroundColor: theme.palette.secondary.light
   }
});
const StyledContainer = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   margin: 0,
   padding: 0,
 });
const DatePicker = (props) => {
   const handleChange = props.handleChange;
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];
   
   const initialDate = (date = new Date()) => {
      let nextMonth = new Date(date);
      nextMonth.setMonth(date.getMonth() + 1);

      return {
         day: date.getDate(),
         month: date.getMonth(),
         monthStr: months[date.getMonth()],
         year: date.getFullYear(),
         firstDay: (new Date(date.getFullYear(), date.getMonth(), 1)).getDay(),
         daysInMonth: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
      }
   } 

   const [dateSelected, setDateSelected] = useState(initialDate);

   const setNewDate = e => {
      if(e.hasOwnProperty('month')) {
         const newDate = new Date(dateSelected.year, dateSelected.month, dateSelected.day);
         if(e.month > dateSelected.month) {
            newDate.setMonth(dateSelected.month + 1);
         } else {
            newDate.setMonth(dateSelected.month - 1);
         }
         setDateSelected(initialDate(new Date(newDate)));
      } else {
         setDateSelected({
            ...dateSelected,
            ...e
         });
      }
   } 

   useEffect(() => {
      handleChange(Object.entries(dateSelected));
   }, [handleChange, dateSelected])
   
   return (
      <StyledContainer>
      <InputLabel 
         htmlFor='datePicker'
         style={{
            ...theme.typography.body2,
         }} >Invoice Date</InputLabel>
      <Popup
         trigger={
            <DatePickerStyled>
               {`${dateSelected.day} ${dateSelected.monthStr} ${dateSelected.year}`}
               <IconCalendar />
            </DatePickerStyled>
         }
         position='bottom center'
         on='click'
         style={{border: '1px solid green'}}
         >               
         <DatePickerPopup 
            id='datePicker'
            dateSelected={dateSelected} 
            setDateSelected={setNewDate}
            style={{border: '1px solid green'}}
         />
      </Popup>   
      </StyledContainer>
   );
};

export default DatePicker;