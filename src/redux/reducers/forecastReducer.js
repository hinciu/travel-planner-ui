import {
    CLEAR_FORECAST, CLEAR_FORECAST_ERROR,
    GET_FORECAST_FAILED,
    GET_FORECAST_REQUESTED,
    GET_FORECAST_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case GET_FORECAST_FAILED:
            return {
                ...state,
                loading: false,
                error: action?.payload?.error,
            };
        case GET_FORECAST_SUCCESS:
            let arr = state.data.slice()
            arr.push(action?.payload?.data)
            return {
                ...state,
                loading: false,
                data: arr,
            };
        case CLEAR_FORECAST:
            return initialState;
        case CLEAR_FORECAST_ERROR:
            return {
                ...state, error: null
            }
        default:
            return state;
    }
};

export default forecastReducer;