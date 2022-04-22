import axiosClient from "./axiosClient"
import axios from 'axios'

const productApi = {
    getAll(params) {
        const url = '/products'
        return axiosClient.get(url, { params: params });
    },
    // get 10 products first
    get(id) {
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/products`
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}`
        return axiosClient.delete(url);
    },
    getproductbybrandId(brandId) {
        const url = `/products/brand/${brandId}`
        return axiosClient.get(url);
    }

}

export default productApi;