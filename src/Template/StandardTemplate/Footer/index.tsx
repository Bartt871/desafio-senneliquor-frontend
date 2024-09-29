import Logo from '../../../Assets/Images/Logo/logo-white.png';

import './style.scss';

export const Footer = () => {
    return (
        <>
            <footer className='standard_template__footer'>
                <div className='logo'>
                    <img src={Logo} alt='logo-white' />
                </div>
                <div className='copy'>
                    &copy; 2024 - William Barreto. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
}