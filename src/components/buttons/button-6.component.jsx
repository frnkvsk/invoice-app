import { ButtonBase } from './button-base.component';
import { theme } from '../../theme';

const Button6 = ({children, clickHandler, otherStyles}) => (
   <ButtonBase
      otherStyles={{
         ...otherStyles,
         color: theme.palette.secondary.main,
         backgroundColor: theme.palette.secondary.light+80,
         '&:hover': {
            backgroundColor: theme.palette.secondary.light,
         }
      }}
      clickHandler={clickHandler}
      children={children} />   
);

export default Button6;