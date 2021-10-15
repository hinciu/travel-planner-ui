import {
    CLEAR_ROUTES, CLEAR_ROUTES_ERROR,
    CREATE_ROUTE_FAILED,
    CREATE_ROUTE_REQUESTED,
    CREATE_ROUTE_SUCCESS, GET_FORECAST_SUCCESS,
    GET_ROUTE_FAILED, GET_ROUTE_REQUESTED, GET_ROUTE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    data: null,
};


const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROUTE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case CREATE_ROUTE_FAILED:
            return {
                ...state,
                loading: false,
                error: action?.payload?.error,
            };
        case CREATE_ROUTE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action?.payload?.data
            };

        case GET_ROUTE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case GET_ROUTE_FAILED:
            return {
                ...state,
                loading: false,
                error: action?.payload?.error,
            };
        case GET_ROUTE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action?.payload?.data
            };
        case CLEAR_ROUTES:
            return initialState
        case CLEAR_ROUTES_ERROR:
            return {
                ...state, error: null
            }

        default:
            return state;
    }
}

export default routeReducer;