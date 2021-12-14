import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';

import { theme } from '../../theme';

const FormSelectPaymentTerms = (props) => {
  
  return (
    <div>
    <InputLabel 
      htmlFor='selectPaymentTerms'
      style={{
        ...theme.typography.body2,
      }}   
      >Payment Terms</InputLabel>
    <Select
      id='selectPaymentTerms'
      size='small'
      value={props.value}
      onChange={e => props.handleChange(e.target.value)}
      inputProps={{ style: { 
        ...theme.typography.formtext,
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.common.light_bg,
        textTransform: 'none',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 3,      
        '&:hover': {
          backgroundColor: theme.palette.secondary.light,
        },
       }}}
      style={{
        ...theme.typography.body2,
        width: 200, 
        height: 30, 
      }}
    >
      <MenuItem value={1}>Net 1 Day</MenuItem>
      <Divider sx={{ my: 0 }} />
      <MenuItem value={7}>Net 7 Days</MenuItem>
      <Divider sx={{ my: 0.2 }} />
      <MenuItem value={14}>Net 14 Days</MenuItem>
      <Divider sx={{ my: 2.8 }} />
      <MenuItem value={30}>Net 30 Days</MenuItem>
    </Select>
    </div>
  );
}

export default FormSelectPaymentTerms;
