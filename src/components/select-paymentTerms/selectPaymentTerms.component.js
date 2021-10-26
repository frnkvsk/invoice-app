import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { theme } from '../../theme';

const ButtonMain = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'auto',
  minWidth: 230,
  height: 40,
  paddingRight: 15,
  paddingLeft: 15,
  fontSize: 15,
  fontWeight: 'normal',
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.common.light_bg,
  textTransform: 'none',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 3,
  
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  }
});

const MenuItemStyled = styled(MenuItem)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'auto',
  minWidth: 230,
  height: 30,
  // paddingRight: 15,
  // paddingLeft: 15,
  fontSize: 15,
  fontWeight: 'normal',
  color: theme.palette.secondary.main,
  // backgroundColor: theme.palette.common.light_bg,
  textTransform: 'none',
  // border: `1px solid ${theme.palette.primary.main}`,
  // borderRadius: 3,
  
  '&:hover': {
    // backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.light,
  }
});

const StyledMenu = styled((props) => (
  <Menu
    
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
    // backgroundColor='green'
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    minWidth: 230,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        // backgroundColor: 'lightgrey',
      },
    },
  },
}));

export default function SelectPaymentTerms() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [value, setValue] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    // console.log(event.target.id)
    // setValue(+event.target.id)
    // console.log('value',value)
  };

  return (
    <div>
      <ButtonMain
        id="customized-button"
        aria-controls="customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        // color={'white'}
        // backgroundColor={theme.palette.common.light_bg}
        // minWidth={'230px'}
      >
        Net 1 Day
      </ButtonMain>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItemStyled id='1' onClick={handleClose} disableRipple>
          Net 1 Days
        </MenuItemStyled>
        <Divider sx={{ my: 0.5 }} />
        <MenuItemStyled id='7'  onClick={handleClose} disableRipple>
          Net 7 Days
        </MenuItemStyled>
        <Divider sx={{ my: 0.5 }} />
        <MenuItemStyled id='14' onClick={handleClose} disableRipple>
          Net 14 Days
        </MenuItemStyled>
        <Divider sx={{ my: 0.5 }} />
        <MenuItemStyled id='30' onClick={handleClose} disableRipple>
          Net 30 Days
        </MenuItemStyled>
      </StyledMenu>
    </div>
  );
}
