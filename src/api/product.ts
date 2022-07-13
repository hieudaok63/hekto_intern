import axiosClient from './axiosClinent';

const productApi = {
    getList(q = '', all = false) {
        let url = '/products';

        if (q.trim()) {
            url += '?q' + q;
        }

        if (all) {
            url += '&all=true';
        }

        return axiosClient.get(url);
    },

    follow(id: number) {
        const url = `/products/${id}/follow`;

        return axiosClient.post(url);
    },
    unFollow(id: number) {
        const url = `/products/${id}/un-follow`;

        return axiosClient.post(url);
    },
};

export default productApi;
