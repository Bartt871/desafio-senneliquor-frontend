import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import Logo from '../../../Assets/Images/Logo/logo.svg';

import './style.scss';

export const Header = () => {
    const navRef = useRef<HTMLUListElement>(null);

    const [onTheTop, setOnTheTop] = useState(true);
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const updateDimensions = () => {
        if (navRef.current) {
            setNavHeight(navRef.current.scrollHeight);
        }
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setOnTheTop(scrollTop < 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            handleScroll();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={classNames('standard_template__header', { '--on_the_top': onTheTop })}>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='toggle'>
                    <button className='button' onClick={() => setNavIsOpen(prev => !prev)}>
                        <FontAwesomeIcon icon={faNavicon} />
                    </button>
                </div>
                <nav className={classNames('nav', { '--is_open': navIsOpen })}>
                    <ul className='items' style={{ maxHeight: navIsOpen ? `${navHeight}px` : '0px' }} ref={navRef}>
                        <li className='item'>
                            <Link to={'#'}>Home</Link>
                        </li>
                        <li className='item'>
                            <Link to={'#'}>Sobre</Link>
                        </li>
                        <li className='item'>
                            <Link to={'#'}>Serviços</Link>
                        </li>
                        <li className='item'>
                            <Link to={'#'}>Área do Doutor</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}