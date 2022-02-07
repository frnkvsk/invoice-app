import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

import Calendar from './calendar.component';
import { ReactComponent as IconArrowLeft } from '../../assets/icon-arrow-left.svg'
import { ReactComponent as IconArrowRight } from '../../assets/icon-arrow-right.svg'
import { theme } from '../../theme';

const BoxStyledWrapper = styled(Container)({
   backgroundColor: theme.palette.common.light_bg,
   backgroundImage: `linear-gradient(${'rgb(250, 250, 250)'}, ${'rgba(246, 246, 246)'})`,
   width: 239,
   padding: 0,
   height: 'auto',
   boxShadow: `0 -5px 5px -5px ${'rgb(252, 252, 252)'}, 0 0 0 0 black`
});

const BoxStyled = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: 240,
   height: 'auto',
   marginLeft: -24,   
   padding: '5px',
   fontSize: 15,
   fontWeight: 800,
   color: '#000000',
   backgroundColor: '#FFFFFF',
   borderRadius: 15,
   opacity: 1,
   zIndex: 0
});

const ButtonMonthChange = styled(Paper)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: 15,
   width: 15,
   fontSize: 12,
   boxShadow: 'none',
   '&:hover': {
      cursor: 'pointer',
   },
});

const DatePickerPopup = ({dateSelected, setDateSelected}) => {
   const [visible, setVisible] = useState(true);
   const changeMonthPrevious = () => {
      setDateSelected({month: dateSelected.month - 1});
   }

   const changeMonthNext = () => {
      setDateSelected({month: dateSelected.month + 1});
   }
   return visible ? (
      <BoxStyledWrapper>
         <BoxStyled>
            <div 
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: 40,
               }}>
               <ButtonMonthChange
                  onClick={changeMonthPrevious}>
                  <IconArrowLeft />
               </ButtonMonthChange>
               <div>{`${dateSelected.monthStr} ${dateSelected.year}`}</div>
               <ButtonMonthChange
                  onClick={changeMonthNext}>
                  <IconArrowRight />
               </ButtonMonthChange>
            </div>
            <div style={{width: '100%'}}>
               <Calendar 
                  dateSelected={dateSelected} 
                  setDateSelected={setDateSelected}
                  setVisible={setVisible}/>
            </div>
         </BoxStyled>
      </BoxStyledWrapper>      
   ) : '';
}

export default DatePickerPopup;
