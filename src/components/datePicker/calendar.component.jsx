import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { theme } from '../../theme';

const ItemActive = styled(Paper)({
   ...theme.typography.body2,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: 15,
   width: 15,
   margin: 7,
   boxShadow: 'none',
   '&:hover': {
      cursor: 'pointer',
   },
});
const ItemInactive = styled(Paper)({
   ...theme.typography.body2,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: 15,
   width: 15,
   margin: 7,
   boxShadow: 'none',
   opacity: 0.2
});

const BoxStyled = styled(Box)({
   display: 'flex',
   width: '100%',
});

export default function Calendar({dateSelected, setDateSelected}) {

   const [currentDay, setCurrentDay] = useState(dateSelected.day);

   const getDays = n => Array(n).fill(0).map((_,i) => i+1);

   const getLastMonthDays = (n) => {
      const daysInLastMonth = (new Date(dateSelected.year, dateSelected.month-1, 0).getDate()) + 1;
      
      return n ? getDays(n)
                  .reverse()
                  .map(e => daysInLastMonth - +e) 
               : [];
   }

   const setNewDate = (e) => {
      setCurrentDay(e);
      setDateSelected({day: e});      
   }

   const days = getDays(dateSelected.daysInMonth);
   const preDays = getLastMonthDays(dateSelected.firstDay);
   const postDays = getDays(7 - ((days.length + preDays.length) % 7));  

   return (
      <BoxStyled sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
         {preDays.map(e => <ItemInactive key={e + 'pre'}>{e}</ItemInactive>)}
         {days.map(e => (
            currentDay === e ? (
               <ItemActive 
                  key={e}
                  style={{color: theme.palette.primary.light}}
                  onClick={() => setNewDate(e)}>{e}</ItemActive>
            ) : (<ItemActive key={e} onClick={() => setNewDate(e)}>{e}</ItemActive>)
         ))}
         {postDays.map(e => <ItemInactive key={e + 'post'}>{e}</ItemInactive>)}        
      </BoxStyled> 
   );
}