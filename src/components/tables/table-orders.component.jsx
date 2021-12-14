import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableFooter } from '@mui/material';

import { LightingContext } from '../../context/lighting.context';
import { theme } from '../../theme';

const StyledTableCellBody = styled(TableCell)({
  borderBottom: 0,
  textAlign: 'right',
  // border: '1px solid pink'
  // sx: {
  //   align: 'center'
  // }
});
const StyledTableCellFooter = styled(TableCell)({
  // backgroundColor: theme.palette.common.dark_4,
  // color: theme.palette.common.white,
  borderBottom: 0,
});

const moneyFormat = moneyStr => {
  return Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(Number(moneyStr));
}

export default function TableOrders({rows, total}) {
  const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);  

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

  return (
    <Table style={{...lightingState.color_5}}>
      <TableHead>
      
        <TableRow 
          style={{              
            border:'none',
          }}>
          <StyledTableCellBody 
            sx={{
              ...lightingState.color_5,
              textAlign: 'left',
              paddingLeft: 5,
              borderTopLeftRadius: 8
            }} 
            colSpan={7}>Item Name</StyledTableCellBody>
          <StyledTableCellBody 
            sx={{
              ...lightingState.color_5,
              textAlign: 'center'
            }} 
            align="right" 
            colSpan={1}>QTY.</StyledTableCellBody>
          <StyledTableCellBody 
            sx={{
              ...lightingState.color_5,
              textAlign: 'right'
            }} 
            align="right" 
            colSpan={1}>Price</StyledTableCellBody>
          <StyledTableCellBody 
            sx={{
              ...lightingState.color_5,
              textAlign: 'right',
              paddingRight: 5,
              borderTopRightRadius: 8
            }} 
            align="right" 
            colSpan={1}>Total</StyledTableCellBody>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} style={{border:'none'}}>
            <StyledTableCellBody 
              sx={{
                ...lightingState.color_2,
                textAlign: 'left',
                paddingLeft: 5
              }} 
              colSpan={7}>
              <strong>{row.name}</strong>
            </StyledTableCellBody>
            <StyledTableCellBody 
              sx={{
                ...lightingState.color_5,
                width: '13%',
                textAlign: 'center'
              }} 
              colSpan={1}><strong>{row.quantity}</strong></StyledTableCellBody>
            <StyledTableCellBody 
              sx={{
                ...lightingState.color_5,
                width: '13%',
                textAlign: 'right'
              }} 
              colSpan={1}><strong>{moneyFormat(row.price)}</strong></StyledTableCellBody>
            <StyledTableCellBody 
              sx={{
                ...lightingState.color_2,
                width: '17%',
                textAlign: 'right',
                paddingRight: 5
              }} 
              colSpan={1}><strong>{moneyFormat(row.total)}</strong></StyledTableCellBody>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
          <TableRow>
            <StyledTableCellFooter colSpan={8}
              sx={{
                paddingLeft: 5,
                ...lightingState.color_4,
                borderBottomLeftRadius: 8,
              }}>Amount Due</StyledTableCellFooter>
            <StyledTableCellFooter colSpan={2}
              sx={{
                ...theme.typography.h3,
                ...lightingState.color_4,
                // width: '20%',
                textAlign: 'right',
                paddingRight: 5,
                borderBottomRightRadius: 8,
              }}>{moneyFormat(total)}</StyledTableCellFooter>
          </TableRow>
      </TableFooter>
    </Table>
  );
}
