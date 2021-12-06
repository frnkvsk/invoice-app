import React from 'react';

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import Button1 from '../components/buttons/button-1.component';
import { Button3 } from '../components/buttons/button-3.component';
import { Button4 } from '../components/buttons/button-4.component';
import { Button5 } from '../components/buttons/button-5.component';
import { Button6 } from '../components/buttons/button-6.component';
import SelectPaymentTerms from '../components/select-paymentTerms/selectPaymentTerms.component';
import { DatePicker } from '../components/datePicker/datePicker.component';
import LogoStyled from '../components/nav/navbar-vertical-main/logo-styled.component';

import { ReactComponent as IconSun } from '../assets/icon-sun.svg';
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg';
import { ReactComponent as IconPlusGray } from '../assets/icon-plus-gray.svg';
import { ReactComponent as IconArrowDown } from '../assets/icon-arrow-down.svg';
import { ReactComponent as IconArrowLeft } from '../assets/icon-arrow-left.svg';
import { ReactComponent as IconArrowRight } from '../assets/icon-arrow-right.svg';
import { ReactComponent as IconCalendar } from '../assets/icon-calendar.svg';
import { ReactComponent as IconCheck } from '../assets/icon-check.svg';
import { ReactComponent as IconDelete } from '../assets/icon-delete.svg';
import { ReactComponent as IconMoon } from '../assets/icon-moon.svg';
import { ReactComponent as IllustrationEmpty } from '../assets/illustration-empty.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Avatar1 from '../assets/image-avatar.jpg';

import { theme } from '../theme';


const ContainerStyled = styled(Container)({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   padding: 30,
   flexWrap: 'wrap',
   border: '1px solid orange',
});

const ContainerStyled2 = styled(Container)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: 'auto',
   padding: 30,
   margin: 5,
   border: '1px solid gray',
});

const DesignSystemPartsDisplay = () => {
   return (
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: '10px',
      }}>
      
         <ContainerStyled>
            <ContainerStyled2>
               Button1
               <Button1>
                 
               </Button1>
            </ContainerStyled2>            
            <ContainerStyled2>
               Button6
               <Button6><IconPlusGray />Add New Item</Button6>
            </ContainerStyled2>
            <ContainerStyled2>
               DatePicker
               <DatePicker />
            </ContainerStyled2>         
            <ContainerStyled2>
               PaymentTermsMenu
               <SelectPaymentTerms />
            </ContainerStyled2>
            <ContainerStyled2>
               Button1
               <Button1>Mark as Paid</Button1>
            </ContainerStyled2>
            <ContainerStyled2>
               Button3
               <Button3>Edit</Button3>
            </ContainerStyled2>
            <ContainerStyled2>
               Button4
               <Button4>Save as Draft</Button4>
            </ContainerStyled2>
            <ContainerStyled2>
               Button5
               <Button5>Delete</Button5>
            </ContainerStyled2>
         </ContainerStyled>         
         
         <ContainerStyled>
            <ContainerStyled2>
               IconSun
               <IconSun />
            </ContainerStyled2>
            <ContainerStyled2>
               IconPlus
               <IconPlus />
            </ContainerStyled2>
            <ContainerStyled2>
               IconPlusGray
               <IconPlusGray />
            </ContainerStyled2>
            <ContainerStyled2>
               IconArrowDown               
               <IconArrowDown />
            </ContainerStyled2>
            <ContainerStyled2>
               IconArrowLeft
               <IconArrowLeft />
            </ContainerStyled2>
            <ContainerStyled2>
               IconArrowRight
               <IconArrowRight />
            </ContainerStyled2>
            <ContainerStyled2>
               IconCalendar
               <IconCalendar />
            </ContainerStyled2>
            <ContainerStyled2 style={{backgroundColor: theme.palette.primary.main}}>
               IconCheck
               <IconCheck />
            </ContainerStyled2>
            <ContainerStyled2>
               IconDelete
               <IconDelete />
            </ContainerStyled2>
            <ContainerStyled2>
               IconMoon
               <IconMoon />
            </ContainerStyled2>
            <ContainerStyled2>
               IllustrationEmpty
               <IllustrationEmpty />
            </ContainerStyled2>
            <ContainerStyled2 style={{backgroundColor: theme.palette.primary.main}}>
               Logo
               <Logo />
            </ContainerStyled2>
            <ContainerStyled2>
               LogoStyled
               <LogoStyled />
            </ContainerStyled2>
            <ContainerStyled2>
               Avatar
               <Avatar 
                  alt='person 1'
                  src={Avatar1}
                  sx={{ width: 20, height: 20}} />
            </ContainerStyled2>
         </ContainerStyled>
      </div>      
   );
};

export default DesignSystemPartsDisplay;