import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './Context/AuthProvider';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './Routes/App';

import 'react-toastify/dist/ReactToastify.css';
import './Assets/Css/reset.css';
import './Assets/Css/main.css';
import './Components/Color/style.scss';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
			retry: 0
		},
		mutations: {
			onError: (error) => {
				console.error('Erro na mutação:', error);
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthProvider>
					<ToastContainer />
					<App />
				</AuthProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
);


reportWebVitals();
