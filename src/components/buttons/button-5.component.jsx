import { ButtonBase } from './button-base.component';
import { theme } from '../../theme';

const Button5 = ({children, clickHandler}) => (
   <ButtonBase
      otherStyles={{
         color: theme.palette.secondary.light,
         backgroundColor: theme.palette.warning.main,
         '&:hover': {
            backgroundColor: theme.palette.info.main
         }
      }}
      clickHandler={clickHandler}
      children={children} />   
);

export default Button5;