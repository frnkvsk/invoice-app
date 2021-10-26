import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { theme } from '../../theme';
import { ReactComponent as IconCalendar} from '../../assets/icon-calendar.svg';
import DatePickerPopup from './popup-calendar.component';
import Popup from 'reactjs-popup';


const DatePickerStyled = styled(Button)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: 250,
   height: 40,
   padding: '0 15px',
   fontSize: 15,
   fontWeight: 'bold',
   color: theme.palette.common.dark_2,
   backgroundColor: 'transparent',
   textTransform: 'none',
   border: `1px solid ${theme.palette.primary.main}`,
   borderRadius: 5,
   '&:hover': {
      backgroundColor: theme.palette.secondary.light
   }
});

const DatePicker = () => {
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
   
   return (
      <Popup
         trigger={
            <DatePickerStyled>
               {`${dateSelected.day} ${dateSelected.monthStr} ${dateSelected.year}`}
               <IconCalendar />
            </DatePickerStyled>}
         position='bottom center'
         on='click'
         style={{border: '1px solid green'}}
         >               
         <DatePickerPopup 
            dateSelected={dateSelected} 
            setDateSelected={setNewDate}
            style={{border: '1px solid green'}}
         />
      </Popup>   
   );
};

export { DatePicker };