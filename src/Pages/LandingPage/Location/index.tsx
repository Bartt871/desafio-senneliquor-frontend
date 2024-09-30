import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import logo from '../../../Assets/Images/Logo/logo.svg';

import './style.scss';

export const Location = () => {
    return (
        <>
            <div className='lading_page_hospitals'>
                <div className='title'>
                    Venha Nos Visitar
                </div>
                <div className='map'>
                    <div className='iframe'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.977920773632!2d-46.6598597!3d-23.5506778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bcb25cefe1%3A0x27bd7932498100f7!2sSenne%20Liquor%20Diagn%C3%B3stico%20-%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1727647362431!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            title='Google Maps'
                        />
                    </div>
                    <div className='content'>
                        <div className='wrap'>
                            <div className='picture'>
                                <img src='https://dummyimage.com/1920x1080' alt='dummy' />
                            </div>
                            <div className='title'>
                                Senne Liquor
                                <div className='subtitle'>
                                    Sempre aqui por você!
                                </div>
                            </div>
                            <div className='description'>
                                <p>Aenean consectetur mattis metus eget pretium. Sed ac bibendum nunc, ac sagittis nulla. Nulla eget tempus ipsum. Aliquam mi dolor, placerat vel lorem mattis, finibus auctor mi.</p>
                            </div>
                            <div className='opening_info'>
                                <div className="title">
                                    Horário de funcionamento
                                </div>
                                <div className='opening'>
                                    <div className='date'>
                                        <div className='week_day'>
                                            SEG - QUI
                                        </div>
                                        <div className='hour'>
                                            9H - 18H
                                        </div>
                                    </div>
                                    <div className='date'>
                                        <div className='week_day'>
                                            SEX
                                        </div>
                                        <div className='hour'>
                                            9H - 17H
                                        </div>
                                    </div>
                                    <div className='date'>
                                        <div className='week_day'>
                                            SAB - DOM
                                        </div>
                                        <div className='hour'>
                                            Fechado
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="social_networks">
                            <div className='logo'>
                                <img src={logo} alt='Logo' />
                            </div>
                            <div className='social_networks'>
                                <div className='title'>
                                    <span>Nos siga </span><span className='--detail'>nas redes</span>
                                </div>
                                <div className='social_networks'>
                                    <Link to={'#'}>
                                        <FontAwesomeIcon icon={faFacebookF} size='2x' />
                                    </Link>
                                    <Link to={'#'}>
                                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                                    </Link>
                                    <Link to={'#'}>
                                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}