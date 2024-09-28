import { useEffect, useState } from 'react';
import classNames from 'classnames';

import './style.scss';

export const Header = () => {
    const [onTheTop, setOnTheTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop > 50) {
                setOnTheTop(false);
            }

            if (scrollTop < 50) {
                setOnTheTop(true);
            }
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
                <nav className={classNames('standard_template__header__nav')}>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Serviços</li>
                        <li>Área do Doutor</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}