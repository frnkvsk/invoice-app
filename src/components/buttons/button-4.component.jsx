import { theme } from '../../theme';
import { ButtonBase } from './button-base.component';

const Button4 = ({children, clickHandler}) => (
   <ButtonBase
      otherStyles={{
         color: theme.palette.secondary.main,
         backgroundColor: theme.palette.common.dark_4,
         '&:hover': {
            backgroundColor: theme.palette.common.dark_1,
         }
      }}
      clickHandler={clickHandler}
      children={children} />   
);

export default Button4;