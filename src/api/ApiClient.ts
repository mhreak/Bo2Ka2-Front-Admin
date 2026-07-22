import { AxiosRequestConfig } from "axios";
import HttpService from "./services/httpService";

export default class ApiClient {
  constructor(private readonly baseUrl: string) {}

  get<TResponse>(
    url: string,
    params?: unknown,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    return HttpService.get<TResponse>(`${this.baseUrl}${url}`, {
      ...config,
      params,
    });
  }

  post<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    return HttpService.post<TResponse, TRequest>(
      `${this.baseUrl}${url}`,
      data,
      config
    );
  }

  put<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    return HttpService.put<TResponse, TRequest>(
      `${this.baseUrl}${url}`,
      data,
      config
    );
  }

  patch<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    return HttpService.patch<TResponse, TRequest>(
      `${this.baseUrl}${url}`,
      data,
      config
    );
  }

  delete<TResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    return HttpService.delete<TResponse>(
      `${this.baseUrl}${url}`,
      config
    );
  }
}