import './style.scss';
import Logo from '../../../Assets/Images/Logo/logo-white.png';

export const Footer = () => {
    return (
        <>
            <footer className='standard_template__footer'>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <div className='copy'>
                    &copy; 2024 - William Barreto. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}