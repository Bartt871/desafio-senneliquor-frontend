import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

import './style.scss';

interface ISlide {
    src: string;
    alt: string;
}

export const Slide = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
                const nextSlideIndex = prev - 1;

                if (nextSlideIndex < 0) {
                    return slides.length - 1;
                }

                return nextSlideIndex;
            }

            const nextSlideIndex = prev + 1;

            if (nextSlideIndex > (slides.length - 1)) {
                return 0;
            }

            return nextSlideIndex;
        });
    }

    return (
        <>
            <div className='landing_page_slide'>
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