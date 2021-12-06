import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { withStyles } from '@mui/styles';
import { Divider } from '@mui/material';

import { theme } from '../../theme';

const styles = {
   select: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.light_bg,
      textTransform: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 3,      
      '&:hover': {
         backgroundColor: theme.palette.secondary.light,
      },
      
   },
   style: {width: 200, height: 30, fontSize: '0.6em'}
   
}

const SelectPaymentTerms = (props) => {
  
  return (
    <div>
    <InputLabel 
      htmlFor='selectPaymentTerms'
      style={{fontSize: '0.8em'}}   
      >Payment Terms</InputLabel>
    <Select
      id='selectPaymentTerms'
      size='small'
      value={props.value}
      onChange={e => props.handleChange(e.target.value)}
      inputProps={{ classes: { input: props.classes.select }}}
      style={{
         width: 200, 
         height: 30, 
         fontSize: '0.6em'
      }}
    >
      <MenuItem value={1}>Net 1 Day</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem value={7}>Net 7 Days</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem value={14}>Net 14 Days</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem value={30}>Net 30 Days</MenuItem>
    </Select>
    </div>
  );
}

export default withStyles(styles)(SelectPaymentTerms);
