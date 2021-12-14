import React, { useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router';
import { Button, Card, Container, Box } from '@mui/material';
import { styled } from '@mui/system';

import { LightingContext } from '../../context/lighting.context';
import { ReactComponent as IconArrow } from '../../assets/icon-arrow-right.svg';
import { theme } from '../../theme';
import Status from '../../components/status/status.component';

const CardStyled = styled(Card)({
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   minHeight: 90,
   marginTop: 10,   
});
const CardContentStyled = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start',
   width: '100%',
   paddingLeft: 10,
   paddingRight: 0, 
   height: '50%',
});
const ContainerIdStyled = styled(Container)({
   ...theme.typography.body2,
   width: '15%',
});
const ContainerPaymentDateStyled = styled(Container)({
   ...theme.typography.body2,
   width: '20%',
});
const ContainerClientNameStyled = styled(Container)({
   ...theme.typography.body2,
   width: '20%',
});
const ContainerTotalStyled = styled(Container)({
   ...theme.typography.h3,
   width: '20%',
});

const ButtonArrow = styled(Button)({
   width: 20,
   margin: 0,
   padding: 20,
});

const InvoiceListCard = ({id, paymentDue, clientName, total, status}) => {
   const history = useHistory();
   
   const lightingContext = useContext(LightingContext);
   const [lightingState, setLightingState] = useState(lightingContext.lightingState);

   useEffect(() => {
      setLightingState(lightingContext.lightingState);
   }, [lightingContext.lightingState]);

   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const dateArr = paymentDue.split('-');
   const dueDate = `${dateArr[2]} ${months[+dateArr[1]]} ${dateArr[0]}`;
   
   return (
      <CardStyled 
         key={id}
         style={{
            ...lightingState.color_6,       
         }}>      
         <CardContentStyled>
            <ContainerIdStyled>
               <span style={{
                  color: theme.palette.primary.light,
                  ...theme.typography.body1
               }}>#</span>{id}
            </ContainerIdStyled>
            <ContainerPaymentDateStyled>Due {dueDate}</ContainerPaymentDateStyled>
            <ContainerClientNameStyled>{clientName}</ContainerClientNameStyled>
            <ContainerTotalStyled>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(Number(total))}</ContainerTotalStyled>
            
            <Status status={status} width={'9rem'} height={'2.7rem'}/>
            <ButtonArrow
               onClick={() => history.push(`/invoice/${id}`)}>
               <IconArrow style={{transform: 'scale(1.2, 1.2)'}}/>
            </ButtonArrow>
            
         </CardContentStyled>
      </CardStyled>
   );
}

export default InvoiceListCard;
