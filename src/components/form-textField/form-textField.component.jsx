import React from 'react';

import { InputLabel, TextField } from '@mui/material';
import { theme } from '../../theme';

const FormTextField = (props) => (
   <div style={{fontSize: 12}}>
      <InputLabel 
         htmlFor={props.id}
         style={{
            ...theme.typography.body2
         }}   
      >{props.label}</InputLabel>
      <TextField         
         variant='outlined'
         size='small'
         id={props.id}
         value={props.value}
         onChange={e => props.handleChange(e.target.value)}
         inputProps={{ style: { 
            ...theme.typography.body2,
            height: 10,
         }}}
         style={{
            ...theme.typography.body2,
            fontSize: 11.8,
            padding: 0,
            margin: 0,
            width: props.width,
            marginBottom: 5
         }}
      />
   </div>
);

export default FormTextField;