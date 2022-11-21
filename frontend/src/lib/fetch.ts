import axios from "axios";
import type { ProductBranch } from "../models/productBranch";
import type { Product, ProductBriefDto } from "./../models/product";
import type { AxiosResponse } from "axios";

const sleep = (delay: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, delay);
	});

axios.defaults.baseURL = "https://localhost:5001/api";

axios.interceptors.response.use(async (resp) => {
	await sleep(1000);
	return resp;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: unknown) => axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: unknown) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Products = {
	list: () => requests.get<ProductBriefDto[]>("/product"),
	details: (id: string) => requests.get<Product>(`/product/${id}`),
};

const ProductBranches = {
	get: (id: string) => requests.get<ProductBranch>(`/branch/${id}`),
};

const agent = {
	Products,
	ProductBranches,
};

export default agent;
