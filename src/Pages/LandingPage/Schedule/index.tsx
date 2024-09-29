import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export const Schedule = () => {
    return (
        <>
            <section className="landing_page_schedule">
                <div className='top_separator' />
                <div className="container">
                    <div className="title">
                        Precisa de um agendamento?
                        <div className="subtitle">
                            Ligue em nosso 0800 ou faça seu agendamento online
                        </div>
                    </div>
                    <button className="action">
                        <div className='content'>Agendamento Online</div>
                        <div className='icon'>
                            <FontAwesomeIcon className='icon' icon={faArrowRightLong} />
                        </div>
                    </button>
                </div>
                <div className='bottom_separator' />
            </section>
        </>
    );
}