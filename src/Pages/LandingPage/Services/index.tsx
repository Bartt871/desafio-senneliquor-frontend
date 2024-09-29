import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faKitMedical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './style.scss';

export const Services = () => {
    return (
        <>
            <div className='landing_page_services'>
                <div className="title">
                    <div className="subtitle">
                        Trabalhando com amor
                    </div>

                    Nossos Serviços
                </div>
                <div className='description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices finibus leo non pharetra. Aenean sollicitudin risus ut mi pharetra tempus. Praesent tempor porttitor massa, eget molestie est dignissim maximus.</p>
                </div>
                <div className='services'>
                    <div className='service'>
                        <div className="image">
                            <div className='img'>
                                <img src='https://dummyimage.com/1920x1080' alt='background' />
                                <div className='overlay' />
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faKitMedical} size='3x' />
                            </div>
                        </div>
                        <div className="title">
                            <Link to={'#'}>
                                Maecenas risus & erat commodo
                            </Link>
                        </div>
                        <div className="description">
                            Maecenas risus erat, commodo vel gravida sit amet, dapibus vitae mauris. Vestibulum maximus finibus ligula et sollicitudin.
                        </div>

                        <Link to={'#'} className="action">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                    <div className='service'>
                        <div className="image">
                            <div className='img'>
                                <img src='https://dummyimage.com/1920x1080' alt='background' />
                                <div className='overlay' />
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faKitMedical} size='3x' />
                            </div>
                        </div>
                        <div className="title">
                            <Link to={'#'}>
                                Maecenas risus & erat commodo
                            </Link>
                        </div>
                        <div className="description">
                            Maecenas risus erat, commodo vel gravida sit amet, dapibus vitae mauris. Vestibulum maximus finibus ligula et sollicitudin.
                        </div>

                        <Link to={'#'} className="action">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                    <div className='service'>
                        <div className="image">
                            <div className='img'>
                                <img src='https://dummyimage.com/1920x1080' alt='background' />
                                <div className='overlay' />
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faKitMedical} size='3x' />
                            </div>
                        </div>
                        <div className="title">
                            <Link to={'#'}>
                                Maecenas risus & erat commodo
                            </Link>
                        </div>
                        <div className="description">
                            Maecenas risus erat, commodo vel gravida sit amet, dapibus vitae mauris. Vestibulum maximus finibus ligula et sollicitudin.
                        </div>

                        <Link to={'#'} className="action">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}