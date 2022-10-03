import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5001/api"

const responseBody = <T> (response: AxiosResponse<T>) => response.data

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Products = {
    list: () => requests.get("/product"),
    details: (id: string) => requests.get(`/product/${id}`),
}

const agent = {
    Products
}

export default agent