import axiosClient from './axiosClinent';

interface IBody {
    name?: string;
    email: string;
    password: string;
}

const authApi = {
    login(body: IBody) {
        const url = '/auth/login';

        return axiosClient.post(url, body);
    },

    register(body: IBody) {
        const url = '/auth/register';
        return axiosClient.post(url, body);
    },
};

export default authApi;
