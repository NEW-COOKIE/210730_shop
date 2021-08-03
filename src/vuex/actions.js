
import {reqAddress, reqCategories, reqShops} from '@/api';
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from './mutations-type';

export default {
    async getAddress ({commit, state}) {
        const {longitude, latitude} = state;
        // 发送异步请求
       const result = await reqAddress(longitude, latitude);
        // 请求成功后，提交给mutations
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, address)
        }
    },

    async getCategories({commit, state}) {
        const {longitude, latitude} = state;
        const result = await reqCategories(longitude,latitude);
        if (result.code === 0) {
            const categories = result.data;
            commit(RECEIVE_CATEGORIES, categories);
        }
    },

    async getshops({commit, state}) {
        const {longitude, latitude} = state;
        const result = await reqShops(longitude,latitude);
        if (result.code === 0) {
            const shops = result.data;
            commit(RECEIVE_SHOPS, shops);
        }
    }
}
