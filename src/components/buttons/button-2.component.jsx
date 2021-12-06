import { ButtonBase } from './button-base.component';
import { theme } from '../../theme';

const Button2 = ({children, clickHandler}) => (
   <ButtonBase
      otherStyles={{
         color: theme.palette.common.light_bg,
         backgroundColor: theme.palette.primary.main,
         '&:hover': {
            backgroundColor: theme.palette.primary.light
         }
      }}
      clickHandler={clickHandler}
      children={children} />   
);

export default Button2;