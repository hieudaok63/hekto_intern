import axiosClient from './axiosClinent';

const productApi = {
    getList(q = '') {
        let url = '/products';

        if (q.trim()) {
            url += '?q' + q;
        }

        return axiosClient.get(url);
    },
};

export default productApi;
