export type HttpMethods = "post" | "put" | "delete" | "get";

export type HttpRequest = {
    url?: string;
    method?: HttpMethods;
    body?: any;
    headers?: any;
};

// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    notFound = 404,
}

export type HttpResponse<T> = {
    statusCode: HttpStatusCode;
    body?: T;
};

export interface HttpClient<R = any> {
    request: (params: HttpRequest) => Promise<HttpResponse<R>>;
}
