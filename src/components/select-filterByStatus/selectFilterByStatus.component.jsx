import React, { useState, useEffect, useContext } from 'react';

import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Button, Menu } from '@mui/material';

import { LightingContext } from '../../context/lighting.context';
import { ReactComponent as IconArrowDown } from '../../assets/icon-arrow-down.svg';
import { theme } from '../../theme';

const ButtonStlyed = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 140,  
  ...theme.typography.body2,
  fontWeight: 800,
  textTransform: 'none',  
});

const SelectStyled = styled(Menu)({
  width: '100%',
  backgroundColor: 'transparent',
});

const MenuItemStyled = styled(MenuItem)({
  width: 140,
  backgroundColor: 'transparent',
});

export default function SelectFilterByStatus({handleMenuSelect}) {
  const lightingContext = useContext(LightingContext);
  const [lightingState, setLightingState] = useState(lightingContext.lightingState);

  useEffect(() => {
    setLightingState(lightingContext.lightingState);
  }, [lightingContext.lightingState]);

  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClose = (value) => {
    setAnchorEl(null);
    handleMenuSelect(value);
  };

  return (
    <>
      <ButtonStlyed
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClick}
        style={{
          ...lightingState.color_1
        }}
        >
        Filter by status
        <IconArrowDown style={{transform: 'scale(1.2, 1.2)'}}/>
      </ButtonStlyed> 
      <SelectStyled
        open={menuOpen}
        anchorEl={anchorEl}
        onClose={menuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItemStyled onClick={() => menuClose('all')}>All</MenuItemStyled>
        <MenuItemStyled onClick={() => menuClose('paid')}>Paid</MenuItemStyled>
        <MenuItemStyled onClick={() => menuClose('pending')}>Pending</MenuItemStyled>
        <MenuItemStyled onClick={() => menuClose('draft')}>Draft</MenuItemStyled>
      </SelectStyled>
    </>    
  );
}
