
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from './mutations-type';

export default {
    [RECEIVE_ADDRESS] (state, address) {
        state.address = address
    },

    [RECEIVE_CATEGORIES] (state, categoriys) {
        state.categoriys = categoriys
    },

    [RECEIVE_SHOPS] (state, shops) {
        state.shops = shops
    },
}
