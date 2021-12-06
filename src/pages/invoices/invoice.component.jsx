import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

import { styled } from '@mui/system';
import { Link } from '@mui/material';

// import { theme } from '../../theme';
// import { LightingContext } from '../../context/lighting.context';
import NavbarInvoice from '../../components/nav/navbar-invoice/NavbarInvoice.component';
import { ReactComponent as IconArrow } from '../../assets/icon-arrow-left.svg';
import InvoiceCard from './invoice-card.component';
import { DataContext } from '../../context/data.context';


const ButtonArrow = styled(Link)({
   width: 80,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   // paddingBottom: 10,
   // marginBottom: 20,
   paddingBottom: 20,
   textDecoration: 'none',
   color: 'black',
   // border: '1px solid gray'
});

const Invoice = () => {   
   const history = useHistory();
   const location = useLocation();
   // const lightingContext = useContext(LightingContext);
   // const [lightingState, setLightingState] = useState(lightingContext.lightingState.bg_lighting === 'light' ? theme.palette.common.light_bg : theme.palette.common.dark_1);

   const dataContext = useContext(DataContext);
   // const [data, setData] = useState([]);
   
   const id = location.pathname.split('/')[2];
   const data = dataContext.data.filter(e => e.id === id)[0];

   // useEffect(() => {
   //    setLightingState(lightingContext.lightingState.bg_lighting === 'light' ? theme.palette.common.light_bg : theme.palette.common.dark_1);
   // }, [lightingContext.lightingState]);
   
   // useEffect(() => {
   //    console.log('Invoice useEffect')
   //    setData();
   // }, []);
   
   // console.log('location',location.pathname)
   // console.log('Invoice status:',data.status)
   // console.log('location status',location.pathname.split('/')[2])
   // console.log('location status',dataContext)
   return (
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         width: '50%',
         height: '100vh',
         backgroundColor: 'transparent',
         // marginTop: 130,
         // marginLeft: 130,
         // border: '1px solid blue',
      }}>
         <div
            style={{
               width: '100%',
               paddingTop: 28,
               // border: '1px solid pink'
            }}>
            <ButtonArrow
               component='button'
               onClick={() => history.goBack()}>
               <IconArrow style={{transform: 'scale(1.2, 1.2)'}}/>
               Go back
            </ButtonArrow>
         </div>
      
         <NavbarInvoice status={data.status}/>

         <div style={{
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
         
            // paddingTop: 'calc(100vh / 3)',
            // border: '1px solid blue',
         }}>
            <InvoiceCard {...data} />
         </div>
      </div>      
   );
};

export default Invoice;


/**
 * 
 * <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               width: '50%',
               // border: '1px solid red'
            }}>
            <div>{data.id}</div>
            <div>{data.clientEmail}</div>
            <div>{data.status}</div>
            
         </div>  
 */