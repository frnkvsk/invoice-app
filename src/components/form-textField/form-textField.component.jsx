import React from 'react';

import { InputLabel, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = {
   div: {
      fontSize: 12, 
   },
   input: {
      height: 10,
      fontSize: '0.8em',      
   },
}
const FormTextField = (props) => (
   <div style={{fontSize: 12}}>
      <InputLabel 
         htmlFor={props.id}
         style={{fontSize: '0.8em'}}   
      >{props.label}</InputLabel>
      <TextField         
         variant='outlined'
         size='small'
         id={props.id}
         value={props.value}
         onChange={e => props.handleChange(e.target.value)}
         inputProps={{ classes: { input: props.classes.input}}}
         style={{
            padding: 0,
            margin: 0,
            width: props.width,
            marginBottom: 5
         }}
      />
   </div>
);

export default withStyles(styles)(FormTextField);