import { combineReducers } from 'redux';
import forecastReducer from "./forecastReducer";
import routeReducer from "./routeReducer";

const allReducers = combineReducers({
    forecast: forecastReducer,
    route: routeReducer
});

export default allReducers;