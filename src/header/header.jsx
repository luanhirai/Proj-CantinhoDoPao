import style from './header.module.css'
import logo from '../assets/Logotipo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function header() {
    return (
        <div className={style.page}>
            <div className={style.menu}>
                <img className={style.logo} src={logo} alt="" />
                <h3>Ínicio</h3>
                <h3>Sobre nós</h3>
                <h3>Contato</h3>
            </div>
            <div className={style.menu2}>
                <div className={style.icon}><ShoppingBagOutlinedIcon /></div>
                <div className={style.iconRule}><HorizontalRuleIcon/></div>
                <div className={style.icon}><MenuIcon/></div>
            </div>
        </div>
    );
}