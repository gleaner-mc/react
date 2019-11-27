import * as types from './types'


export default (state, { type, payload }) => {
    switch (type) {
        case types.VIEW_NAV:
            return { ...state, bNav: payload };
        case types.VIEW_FOOT:
            return { ...state, bFoot: payload };
        case types.VIEW_LOADING:
            return { ...state, bLoading: payload };
        case types.UPDATE_HOME:
            return { ...state, list: payload };
        case types.CHECK_USER:
            return { ...state, user: payload };
        case types.UPDATE_DETAIL:
            return { ...state, detail: payload };
        case types.ADD_SHOPCAR:
            return { ...state, shopcar: payload };
        case types.CHANGE_ITEM:
            return { ...state, shopcar: payload };
        case types.REMOVE_ALL:
            return { ...state, shopcar: payload };
        case types.TOTAL:
            return { ...state, totalPrice: payload };
        case types.CLEAR_CAR:
            return { ...state, shopcar: [] };
        case types.CLEAR_PRICE:
            return { ...state, totalPrice: 0 };
        case types.CLEAR_DETAIL:
            return { ...state, detail: payload };
        
        case types.CLEAR_USER:
            return {
                ...state, user: {
                    err: 1,
                    msg: '未登录',
                    data: {}
                }
            };

        default:
            return state;
    }
}