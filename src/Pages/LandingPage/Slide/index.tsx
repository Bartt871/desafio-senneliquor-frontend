import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

import './style.scss';

interface ISlide {
    src: string;
    alt: string;
}

export const Slide = () => {
    const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);


    const slides: ISlide[] = [
        { src: 'https://dummyimage.com/1920x1080/EC6726', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/D15D20', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/F3953F', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/B9BD5C', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/ABB056', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/C6C6C6', alt: 'dummy' },
        { src: 'https://dummyimage.com/1920x1080/DADADA', alt: 'dummy' }
    ];

    const handleChangeSlide = (direction: 'prev' | 'next') => {
        setActiveSlideIndex(prev => {
            if (direction === 'prev') {
                return prev === 0 ? slides.length - 1 : prev - 1;
            }

            return prev === slides.length - 1 ? 0 : prev + 1;
        });
    }

    const startAutoSlide = useCallback(() => {
        intervalId.current = setInterval(() => {
            setActiveSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000);
    }, [slides.length]);

    const pauseAutoSlide = () => {
        setAutoSlide(false);
        clearInterval(intervalId.current);
    };

    useEffect(() => {
        if (autoSlide) {
            startAutoSlide();
        }

        return () => clearInterval(intervalId.current);
    }, [autoSlide, startAutoSlide]);

    return (
        <>
            <div
                className='landing_page_slide'
                onMouseEnter={pauseAutoSlide}
                onMouseLeave={() => setAutoSlide(true)}
            >
                <button className='prev' onClick={() => handleChangeSlide('prev')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='next' onClick={() => handleChangeSlide('next')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                {slides.map((slide, index) => {
                    return (
                        <>
                            <div
                                key={index}
                                className={classNames('slide', { '--active': index === activeSlideIndex })}
                            >
                                <img src={slide.src} alt={slide.alt} />
                            </div>
                        </>
                    );
                })}
                <div className='dots'>
                    {slides.map((slide, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={classNames('dot', { '--active': index === activeSlideIndex })}
                                    onClick={() => setActiveSlideIndex(index)}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}