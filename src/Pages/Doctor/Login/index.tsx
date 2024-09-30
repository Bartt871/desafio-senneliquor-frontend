import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthProvider/useAuth';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Form from '../../../Components/Form';
import logo from '../../../Assets/Images/Logo/logo.svg';

import './style.scss';

export const DoctorLogin = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const login = async ({ username, password }: { username: string; password: string; }) => {
        setIsLoading(true);
        const loggedIn = await auth.authenticate(username, password);

        if (loggedIn) {
            navigate('/doctor');
            return;
        }

        setIsLoading(false);
    }

    return (
        <>
            <div className="doctor_login">
                <div className="form">
                    <div className='logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='title'>
                        Faça login com sua conta
                    </div>
                    <Form
                        className='form'
                        onFinish={login}
                    >
                        <div className='field'>
                            <input type='text' name='username' placeholder='Usuário' required />
                        </div>
                        <div className='field'>
                            <input type='password' name='password' minLength={8} placeholder='Senha' required />
                        </div>
                        <div className='remember'>
                            <div className='checkbox'>
                                <label>
                                    <input type='checkbox' placeholder='Senha' />
                                    Lembrar
                                </label>
                            </div>
                            <div className='forgot'>
                                <Link to={'#'}>
                                    Esqueceu a Senha?
                                </Link>
                            </div>
                        </div>
                        <div className='action'>
                            <button type='submit' disabled={isLoading}>
                                <span>
                                    Iniciar Sessão
                                </span>
                                {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                            </button>
                        </div>
                    </Form>
                </div>
                <div className='background'>

                </div>
            </div>
        </>
    )
}