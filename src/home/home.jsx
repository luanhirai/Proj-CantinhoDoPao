import Header from '../header/header'
import style from './home.module.css'
import Footer from '../footer/footer'
import pao from '../assets/Pao.png'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export default function home() {
    return (
        <>
            <Header />
            <div className={style.page}>
                
                <div className={style.body}>
                    
                    <div className={style.text}>
                        <h1>Venha conhecer a <br /><span>MELHOR PADARIA</span><br /> de Álvares Machado</h1>
                        <h3>Visite-nos e descubra o sabor e a dedicação que fazem do Cantinho do Pão um lugar especial para toda a família!</h3>
                    </div>

                    <div className={style.buttons}>
                        <button>Peça agora</button>
                        <h3>Explorar mais  </h3>
                        <EastOutlinedIcon style={{ color: '#572307' }} />                    </div>
                </div>


                <div className={style.body}>
                    <img src={pao} className={style.imgPao} alt="" />
                </div>
                <div className={style.ballstyle}>

                </div>
            </div>
            
        </>
    );
}