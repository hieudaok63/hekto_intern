import axiosClient from './axiosClinent';

const blogApi = {
    getList() {
        const url = '/blogs';
        return axiosClient.get(url);
    },
};

export default blogApi;
