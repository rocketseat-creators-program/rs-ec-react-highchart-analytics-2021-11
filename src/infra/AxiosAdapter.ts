import axios, { AxiosResponse } from "axios";
import {
    HttpClient,
    HttpRequest,
    HttpResponse,
} from "../data/interfaces/http/httpClient";

export class AxiosAdapter implements HttpClient {
    async request(params: HttpRequest): Promise<HttpResponse<any>> {
        let httpResponse: AxiosResponse<any>;

        try {
            httpResponse = await axios.request({
                url: params.url,
                method: params.method,
                data: params.body,
                headers: params.headers,
            });
        } catch (error: any) {
            httpResponse = error.response;
        }

        return {
            statusCode: httpResponse.status,
            body: httpResponse.data,
        };
    }
}
