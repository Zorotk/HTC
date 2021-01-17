import {NavLink} from "react-router-dom";
import logoSrc from '../../assets/img/sign.svg'
import './logo.scss'

const Logo = ({className}) => {

    return (
        <NavLink to='/movies' className={`logo ${className}`}>
            <div>
                <img src={logoSrc} alt="Logo" className='logo-img'/>
            </div>
            <p className='logo-title'>Видеосервис</p>
        </NavLink>
    )
}

export default Logo