
import ajax from './axios.js';

export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`);

export const reqCategories = () => ajax('/indexx_catetory');

export const reqShops = ({longitude, latitude}) => ajax(`/shops`, {params: {longitude,latitude}})
