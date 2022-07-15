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

    getFeatured() {
        const url = '/products/featured';
        return axiosClient.get(url);
    },
    getLatest() {
        const url = '/products/latest';
        return axiosClient.get(url);
    },
    getTrending() {
        const url = '/products/trending';
        return axiosClient.get(url);
    },
};

export default productApi;
