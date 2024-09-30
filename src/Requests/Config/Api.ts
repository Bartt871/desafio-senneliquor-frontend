import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getUserLocalStorage, setUserLocalStorage } from "../../Context/AuthProvider/utils";
import { toast } from "react-toastify";

export abstract class Api {
    protected api: AxiosInstance;

    constructor() {
        this.api = axios.create({ baseURL: process.env.REACT_APP_HOST_URL });

        this.prepareRequestInterceptor();
        this.prepareResponseInterceptor();
    }

    private prepareRequestInterceptor() {
        this.api.interceptors.request.use(
            (config) => {
                const user = getUserLocalStorage();

                config.headers.Authorization = user?.token;

                if (config.method?.toUpperCase() === 'POST') {
                    config.headers["Content-Type"] = 'application/json; charset=utf-8';
                }

                return config;
            }
        )
    }

    private prepareResponseInterceptor() {
        this.api.interceptors.response.use(
            async config => config,
            async (error: { response: AxiosResponse } | any) => {
                if (
                    error.code !== 'ERR_CANCELED' &&
                    error.response.status !== 422 &&
                    error.response.status >= 400 &&
                    error.response.status < 500 &&
                    (error.response.config.showToast === undefined || error.response.config.showToast)
                ) {
                    toast.error(error.response.data.message);

                    if (error.response.status === 401) {
                        setUserLocalStorage(undefined);
                    }
                }

                if (error.code !== 'ERR_CANCELED' && error.response.status >= 500 && error.response.status < 600) {
                    toast.error("Erro interno do servidor. Tente novamente mais tarde.");
                }

                return Promise.reject(error);
            }
        );
    }
}