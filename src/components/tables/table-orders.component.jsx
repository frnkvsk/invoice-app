import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableFooter } from '@mui/material';

import { theme } from '../../theme';

const StyledTableCellBody = styled(TableCell)({
  borderBottom: 'none'
});
const StyledTableCellFooter = styled(TableCell)({
  backgroundColor: theme.palette.common.dark_4,
  color: theme.palette.common.white,
  borderBottom: 0,
});

const moneyFormat = moneyStr => {
  return Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(Number(moneyStr));
}

export default function TableOrders({header, rows, total}) {
  return (
    // <TableContainer component={Paper} 
    //   style={{ 
    //     borderBottom: 'none'
    //   }}>
      <Table 
        style={{
          backgroundColor: theme.palette.secondary.light+'20',
          // border: '1px solid red',
          borderBottomLeftRadius: 10,
        }} aria-label="customized table">
        <TableHead>
          <TableRow 
            style={{              
              border:'none'
            }}>
            <StyledTableCellBody>{header[0]}</StyledTableCellBody>
            <StyledTableCellBody align="right">{header[1]}</StyledTableCellBody>
            <StyledTableCellBody align="right">{header[2]}</StyledTableCellBody>
            <StyledTableCellBody align="right">{header[3]}</StyledTableCellBody>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} style={{border:'none'}}>
              <StyledTableCellBody component="th" scope="row">
                {row.name}
              </StyledTableCellBody>
              <StyledTableCellBody align="right">{row.quantity}</StyledTableCellBody>
              <StyledTableCellBody align="right">{row.price}</StyledTableCellBody>
              <StyledTableCellBody align="right">{moneyFormat(row.total)}</StyledTableCellBody>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableRow>
              <StyledTableCellFooter colSpan={2}
                sx={{
                  borderBottomLeftRadius: 8,
                }}>Amount Due</StyledTableCellFooter>
              <StyledTableCellFooter colSpan={2}
                sx={{
                  ...theme.typography.h3,
                  width: '20%',
                  textAlign: 'right',
                  borderBottomRightRadius: 8,
                }}>{moneyFormat(total)}</StyledTableCellFooter>
            </TableRow>
        </TableFooter>
      </Table>
    // </TableContainer>
  );
}
