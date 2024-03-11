import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { MAIN_API_URI } from '../constants/constApiUri';

interface ApiConfig {
  baseUrl: string;
  headers: Record<string, string>;
}

class Api {
  private instance: AxiosInstance;

  constructor({ baseUrl, headers }: ApiConfig) {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers,
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response) {
          return Promise.reject(error.response);
        } else {
          return Promise.reject(error);
        }
      }
    );

    this.instance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access');

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            const refreshResponse = await this.tokensRefresh(
              localStorage.getItem('refresh') || ''
            );

            // Обновляем access token в localStorage
            localStorage.setItem('access', refreshResponse.data.access);

            // Повторяем оригинальный запрос с обновленным токеном
            originalRequest.headers['Authorization'] =
              `Bearer ${refreshResponse.data.access}`;

            return this.instance(originalRequest);
          } catch (refreshError) {
            // Если обновление не удалось, перенаправляем на страницу авторизации
            // Или выполняйте другие действия в соответствии с вашими потребностями
            console.error('Failed to refresh token:', refreshError);
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  private _request(
    url: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.request({ url, ...config });
  }

  signIn(email: string, password: string): Promise<AxiosResponse> {
    return this._request('/users/login/', {
      method: 'POST',
      data: { email, password },
    });
  }

  tokensRefresh(token: string): Promise<AxiosResponse> {
    return this._request('/tokens/refresh/', {
      method: 'POST',
      data: { refresh: token },
    });
  }
}

const MainApi = new Api({
  baseUrl: MAIN_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default MainApi;
