import { Location } from './Location';
import { Schedule } from './Schedule';
import { Services } from './Services';
import { Slide } from './Slide';

import './style.scss';

export const LandingPage = () => {
    return (
        <>
            <div className='landing_page'>
                <Slide />
                <Services />
                <Schedule />
                <Location />
                <div className='footer_extended' />
            </div>
        </>
    );
}